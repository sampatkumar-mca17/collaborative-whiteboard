import { Injectable } from '@angular/core';
import { SharedMap } from 'fluid-framework';
import { BehaviorSubject, Observable } from 'rxjs';
import { SignalManager } from '@fluid-experimental/data-objects';

import { FluidContainerService } from './fluid-container.service';
import { MouseTracker } from './mouse-tracker';
import { FluidData } from '../shared/types';
import { WhiteboardElement } from 'ng-whiteboard';

@Injectable({
    providedIn: 'root'
})
export class FluidModelService {
    whiteBoardSharedMap: SharedMap | undefined;
    mouseTracker: MouseTracker | undefined;
    syncSharedMap: (() => void) | undefined;
    fluidData: FluidData | undefined;
    private behaviorSubject$ = new BehaviorSubject({ elementToBeDrawn: [] });
    behaviorSubjectObservable$: Observable<{ elementToBeDrawn:WhiteboardElement[] }>;
    elementToBeDrawn: WhiteboardElement[] = [];

    constructor(private fluidContainerService: FluidContainerService) {
        this.behaviorSubjectObservable$ = this.behaviorSubject$.asObservable();
    }

    async initFluid() {
        if (!this.whiteBoardSharedMap) {
            this.fluidData = await this.fluidContainerService.getFluidData();
            this.whiteBoardSharedMap = this.fluidData.sharedMap;
            this.syncWhiteboardData();

            // Track mouse movement for all collaborators
            this.mouseTracker = new MouseTracker(
                this.fluidData.container,
                this.fluidData.services.audience,
                this.fluidData.container.initialObjects['signaler'] as SignalManager,
            );
        }
    }

    updatewhiteBoardSharedMap(elementToBeDrawn:WhiteboardElement[]) {
        if (this.whiteBoardSharedMap) {
            this.whiteBoardSharedMap.set('elementToBeDrawn', elementToBeDrawn);
        }
    }

    private syncWhiteboardData() {
        // Only sync if the Fluid SharedMap object is defined.
        if (this.whiteBoardSharedMap) {
            this.syncSharedMap = () => {
                this.elementToBeDrawn = this.whiteBoardSharedMap!.get('elementToBeDrawn') ?? [];
                // Notify listeners that shared map data has changed.
                this.behaviorSubject$.next({ elementToBeDrawn:this.elementToBeDrawn });
            };
            this.syncSharedMap();

            this.whiteBoardSharedMap!.on('valueChanged', this.syncSharedMap);
        }
    }
}
