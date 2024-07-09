import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ElementTypeEnum, FormatType, NgWhiteboardComponent, NgWhiteboardModule, NgWhiteboardService, ToolsEnum, WhiteboardElement } from 'ng-whiteboard';
import { NgxColorsModule } from 'ngx-colors'
import { WHITEBOARD_ZOOM_OPTIONS } from './white-board.constants';
import { FluidModelService } from '../core/fluid- model.service';
import { MouseTracker } from '../core/mouse-tracker';
import { renderMousePresence } from '../shared/helpers';

@Component({
  selector: 'app-whiteboard-component',
  templateUrl: './whiteboard.component.html',
  styleUrls: ['./whiteboard.component.scss'],
  standalone:true,
  imports:[
    CommonModule,
    NgWhiteboardModule,
    MatTooltipModule,
    NgxColorsModule,
  ],
  providers: [NgWhiteboardService],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class WhiteBoardComponent implements AfterViewInit, OnInit {
  @ViewChild('workarea', { static: false }) private workarea!: ElementRef<HTMLElement>;
  @ViewChild('whiteboard',{ static:false }) private whiteboard!: NgWhiteboardComponent

  toolsEnum = ToolsEnum;
  elementTypeEnum = ElementTypeEnum;
  selectedTool: ToolsEnum = ToolsEnum.BRUSH;
  selectedElement: WhiteboardElement | null = null;
  whiteBoardZoomOptions :number[] = WHITEBOARD_ZOOM_OPTIONS

  options = {
    strokeColor: '#ff0',
    strokeWidth: 5,
    fill: '#000',
    backgroundColor: '#fff' as any,
    canvasHeight: 1400,
    canvasWidth: 1400,
    dasharray: '',
  };

  formatTypes = FormatType;
  outerWidth = 1200;
  outerHeight = 750;
  zoom = 1;
  x = 0;
  y = 0;
  private saveFromTemplate: boolean;
  private savedImage:string = ''
  myself: any;
  @ViewChild('mouseTrackerDiv', { static: true }) mouseTrackerDiv: ElementRef = {} as ElementRef;
  triggeredFromBehaviouSubject: boolean;

  constructor(private _whiteboardService: NgWhiteboardService, private fluidService: FluidModelService) {}
  @HostListener('document:keyup', ['$event'])
      handleDeleteKeyboardEvent(event: KeyboardEvent) {
        if(event.key === 'Delete' || event.key === 'Backspace')
        {
          this.deleteSelectedElement()
        }
        else if(event.getModifierState && event.getModifierState('Control')){
          console.log(event.key)
          if(event.key === 'z'){
            this.undoSelectedElement()
          }
          else if(event.key === 'y'){
            this.redoSelectedElement()
          }
        }
      }
  async ngOnInit(): Promise<void> {
    await this.fluidService.initFluid()
    this.myself = await this.fluidService.fluidData?.services.audience.getMyself();
    this.fluidService.behaviorSubjectObservable$.subscribe(data =>{
      this.triggeredFromBehaviouSubject = true
      this.whiteboard.data = data.elementToBeDrawn
    })
    renderMousePresence(this.fluidService.mouseTracker as MouseTracker,
      this.mouseTrackerDiv.nativeElement as HTMLDivElement , this.myself);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      // this.calculateSize();
      this.whiteboard.dataChange.subscribe(()=>{

      }

      )
    }, 0);
  }

  calculateSize() {
    const workarea = this.workarea.nativeElement;
    const dim = {
      w: this.options.canvasWidth,
      h: this.options.canvasHeight,
    };
    let w = workarea.clientWidth;
    let h = workarea.clientHeight;
    const w_orig = w,
      h_orig = h;
    const zoom = this.zoom;

    const multi = 2;
    w = Math.max(w_orig, dim.w * zoom * multi);
    h = Math.max(h_orig, dim.h * zoom * multi);
    const scroll_x = w / 2 - w_orig / 2;
    const scroll_y = h / 2 - h_orig / 2;

    this.outerWidth = w;
    this.outerHeight = h;
    this.updateSize(dim.w, dim.h);

    setTimeout(() => {
      workarea.scrollLeft = scroll_x;
      workarea.scrollTop = scroll_y;
    }, 0);
  }

  updateSize(w: number, h: number) {
    this.options.canvasWidth = w;
    this.options.canvasHeight = h;
    const current_zoom = this.zoom;
    const contentW = this.outerWidth;
    const contentH = this.outerHeight;
    const x = contentW / 2 - (w * current_zoom) / 2;
    const y = contentH / 2 - (h * current_zoom) / 2;
    setTimeout(() => {
      this.x = x;
      this.y = y;
    }, 0);
  }

  zoomWheel(e: Event) {
    const ev = e as WheelEvent;

    if (ev.altKey || ev.ctrlKey) {
      e.preventDefault();
      const zoom = this.zoom * 100;
      this.setZoom(Math.trunc(zoom - (ev.deltaY / 100) * (ev.altKey ? 10 : 5)));
    }
  }

  setZoom(new_zoom: string | number) {
    const old_zoom = this.zoom;
    let zoomlevel = +new_zoom / 100;
    if (zoomlevel < 0.001) {
      zoomlevel = 0.1;
    }
    const dim = {
      w: this.options.canvasWidth,
      h: this.options.canvasHeight,
    };
    let animatedZoom = null;
    if (animatedZoom != null) {
      window.cancelAnimationFrame(animatedZoom);
    }
    // zoom duration 500ms
    const start = Date.now();
    const duration = 500;
    const diff = zoomlevel - old_zoom;
    const animateZoom = () => {
      const progress = Date.now() - start;
      let tick = progress / duration;
      tick = Math.pow(tick - 1, 3) + 1;
      this.zoom = old_zoom + diff * tick;
      this.updateSize(dim.w, dim.h);

      if (tick < 1 && tick > -0.9) {
        animatedZoom = requestAnimationFrame(animateZoom);
      } else {
        this.zoom = zoomlevel;
        this.updateSize(dim.w, dim.h);
      }
    };
    animateZoom();
  }
  dataChanged(_):void{
     this.fluidService.updatewhiteBoardSharedMap(this.whiteboard.data)
  };

  deleteSelectedElement(){
      const selectedEleIndex = this.whiteboard.data.findIndex(d => d.id === this.selectedElement.id);
      if(selectedEleIndex > -1){
        this.whiteboard.data.splice(selectedEleIndex, 1)
      }
  }

  undoSelectedElement(){
    this._whiteboardService.undo()
  }

  redoSelectedElement(){
    this._whiteboardService.redo()
  }



  setSizeResolution(value: string) {
    let w = this.options.canvasWidth;
    let h = this.options.canvasHeight;
    const dims: number[] = [];
    dims[0] = parseInt(value.split('x')[0]);
    dims[1] = parseInt(value.split('x')[1]);
    if (value == 'Custom') {
      return;
    } else if (value == 'content') {
      dims[0] = 100;
      dims[1] = 100;
    }
    const diff_w = dims[0] - w;
    const diff_h = dims[1] - h;

    let animatedSize = null;
    if (animatedSize != null) {
      window.cancelAnimationFrame(animatedSize);
    }
    const start = Date.now();
    const duration = 500;

    const animateCanvasSize = () => {
      const progress = Date.now() - start;
      let tick = progress / duration;
      tick = Math.pow(tick - 1, 3) + 1;
      w = parseInt((dims[0] - diff_w + tick * diff_w).toFixed(0));
      h = parseInt((dims[1] - diff_h + tick * diff_h).toFixed(0));
      this.updateSize(w, h);
      if (tick < 1 && tick > -0.9) {
        animatedSize = requestAnimationFrame(animateCanvasSize);
      } else {
        this.updateSize(w, h);
      }
    };
    animateCanvasSize();
  }

  onDragDown(input: HTMLInputElement, selectedElement: Record<string, any>, prop: string | number) {
    const min = input.min ? parseInt(input.min, 10) : null;
    const max = input.max ? parseInt(input.max, 10) : null;
    const step = parseInt(input.step, 10);
    let area = 200;
    if (min && max) {
      area = max - min > 0 ? (max - min) / step : 200;
    }
    const scale = (area / 70) * step;
    let lastY = 0;
    let value = parseInt(input.value, 10);

    const onMouseMove = (e: MouseEvent) => {
      if (lastY === 0) {
        lastY = e.pageY;
      }
      const deltaY = (e.pageY - lastY) * -1;
      lastY = e.pageY;
      let val = deltaY * scale * 1;
      const fixed = step < 1 ? 1 : 0;
      val.toFixed(fixed);
      val = Math.floor(Number(value) + Number(val));

      if (max !== null) val = Math.min(val, max);
      if (min !== null) val = Math.max(val, min);
      value = val;

      selectedElement[prop] = value;
      input.value = value.toString();
    };
    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }

  setNumberValue(obj: Record<string, any>, prop: string, value: number): void {
    if (!isNaN(value)) {
      obj[prop] = value;
    }
  }

  toggleFontWeight() {
    if (!this.selectedElement) {
      return;
    }
    if (this.selectedElement.options.fontWeight === 'normal') {
      this.selectedElement.options.fontWeight = 'bold';
    } else {
      this.selectedElement.options.fontWeight = 'normal';
    }
  }
  toggleFontStyle() {
    if (!this.selectedElement) {
      return;
    }
    if (this.selectedElement.options.fontStyle === 'normal') {
      this.selectedElement.options.fontStyle = 'italic';
    } else {
      this.selectedElement.options.fontStyle = 'normal';
    }
  }
  newDocument() {
    this._whiteboardService.erase();
  }

  saveAs(format: FormatType) {
    this._whiteboardService.save(format);

  }

  addImage(fileInput: EventTarget | null) {
    if (fileInput) {
      const files = (fileInput as HTMLInputElement).files;
      if (files) {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent) => {
          const image = (e.target as FileReader).result;
          this._whiteboardService.addImage(image as string);
        };
        reader.readAsDataURL(files[0]);
      }
    }
  }

  undo() {
    this._whiteboardService.undo();
  }
  redo() {
    this._whiteboardService.redo();
  }

  colorChange(propName: 'fill' | 'strokeColor', color) {
    if (this.selectedElement) {
      this.selectedElement.options[propName] = color;
    } else {
      this.options[propName] = color;
      this.options = this.options
      this.updateOptions();
    }
  }

  swapColors() {
    [this.options.fill, this.options.strokeColor] = [this.options.strokeColor, this.options.fill];
    this.updateOptions();
  }

  updateOptions() {
    this.options = Object.assign({}, this.options);
  }

  setSelectedElement(element: WhiteboardElement | null) {
    this.selectedElement = element;
  }

  onSave(img: string) {
    const cb = navigator.clipboard;
    if (cb) {
      cb.writeText(img);
    }
  }
}
