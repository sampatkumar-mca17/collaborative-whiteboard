import { SignalManager } from "@fluid-experimental/data-objects";
import { AzureMember } from "@fluidframework/azure-client";
import { IEvent } from "@fluidframework/common-definitions";
import { TypedEventEmitter } from "@fluidframework/common-utils";
import { IFluidContainer, IMember, IServiceAudience } from "fluid-framework";

export interface IMouseTrackerEvents extends IEvent {
    (event: "mousePositionChanged", listener: () => void): void;
}

export interface IMousePosition {
    x: number;
    y: number;
}

export class MouseTracker extends TypedEventEmitter<IMouseTrackerEvents> {
    private static readonly mouseSignalType = "positionChanged";
    private prevPosition: IMousePosition | undefined;

    /**
     * Local map of mouse position status for clients
     *
     * ```
     * Map<userId, Map<clientid, position>>
     * ```
     */
    private readonly posMap = new Map<string, Map<string, IMousePosition>>();

    private readonly onMouseSignalFn = (clientId: string, payload: any) => {
        const userId: string = payload.userId;
        const position: IMousePosition = payload.pos;

        let clientIdMap = this.posMap.get(userId);
        if (clientIdMap === undefined) {
            clientIdMap = new Map<string, IMousePosition>();
            this.posMap.set(userId, clientIdMap);
        }

        clientIdMap.set(clientId, position);
        this.emit("mousePositionChanged");
    };

    public constructor(
        container: IFluidContainer,
        public readonly audience: IServiceAudience<IMember>,
        private readonly signalManager: SignalManager,
    ) {
        super();

        this.audience.on("memberRemoved", (clientId: string, member: IMember) => {
            const clientIdMap = this.posMap.get(member.userId);
            if (clientIdMap !== undefined) {
                clientIdMap.delete(clientId);
                if (clientIdMap.size === 0) {
                    this.posMap.delete(member.userId);
                }
            }
            this.emit("mousePositionChanged");
        });

        this.signalManager.on("error", (error) => {
            this.emit("error", error);
        });

        this.signalManager.onSignal(MouseTracker.mouseSignalType, (clientId, local, payload) => {
            this.onMouseSignalFn(clientId, payload);
        });

        window.addEventListener("mousemove", (e) => {
            const position: IMousePosition = {
                x: e.clientX,
                y: e.clientY,
            };
            // Throttling code to avoid sending too many signals
            if (this.prevPosition) {
                const throttleThreshold = .02;
                const xThrottle = position.x >= this.prevPosition.x + (this.prevPosition.x * throttleThreshold) ||
                                  position.x <= this.prevPosition.x - (this.prevPosition.x * throttleThreshold);
                const yThrottle = position.y >= this.prevPosition.y + (this.prevPosition.y * throttleThreshold) ||
                                  position.y <= this.prevPosition.y - (this.prevPosition.y * throttleThreshold);
                if (xThrottle || yThrottle) {
                    this.sendMouseSignal(position);
                }
            }
            else {
                this.sendMouseSignal(position);
            }
            this.prevPosition = position;

        });
    }

    /**
     * Alert all connected clients that there has been a change to a client's mouse position
     */
    private sendMouseSignal(position: IMousePosition) {
        this.signalManager.submitSignal(
            MouseTracker.mouseSignalType,
            { userId: this.audience.getMyself()?.userId, pos: position },
        );
    }

    public getMousePresences(): Map<AzureMember, IMousePosition> {
        const statuses: Map<AzureMember, IMousePosition> = new Map <AzureMember, IMousePosition>();
        this.audience.getMembers().forEach((member, userId) => {
            member.connections.forEach((connection) => {
                const position = this.getMousePresenceForUser(userId, connection.id);
                if (position !== undefined) {
                    statuses.set((member as AzureMember), position);
                }
            });
        });
        return statuses;
    }

    public getMousePresenceForUser(userId: string, clientId: string): IMousePosition | undefined {
        return this.posMap.get(userId)?.get(clientId);
    }
}
