import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormatType, NgWhiteboardComponent, NgWhiteboardModule, NgWhiteboardService, ToolsEnum, WhiteboardElement } from 'ng-whiteboard';
import { NgxColorsModule } from 'ngx-colors'
import { WHITEBOARD_OPTIONS, WHITEBOARD_OUTER_HEIGHT, WHITEBOARD_OUTER_WIDTH, WHITEBOARD_X, WHITEBOARD_Y, WHITEBOARD_ZOOM, WHITEBOARD_ZOOM_OPTIONS } from '../white-board.constants';
import { FluidModelService } from '../../core/fluid- model.service';
import { MouseTracker } from '../../core/mouse-tracker';
import { renderMousePresence } from '../../shared/helpers';
import { addDoc, collection, doc, Firestore, getDoc, updateDoc } from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SharedService } from '../../services/shared.service';
import { SaveWhiteboardComponent } from '../save-whiteboard/save-whiteboard.component';
import { ToastrService } from 'ngx-toastr';
import { WhiteboardAddImageComponent } from './whiteboard-add-image/whiteboard-add-image.component';
import { WhiteboardUndoComponent } from './whiteboard-undo/whiteboard-undo.component';
import { WhiteboardNewDocumentComponent } from './whiteboard-new-document/whiteboard-new-document.component';
import { WhiteboardRedoComponent } from './whiteboard-redo/whiteboard-redo.component';
import { WhiteboardSaveToDbComponent } from './whiteboard-save-to-db/whiteboard-save-to-db.component';
import { WhitebordButtonToolComponent } from './whitebord-button-tool/whitebord-button-tool.component';
import { WhiteboardSaveAsMenuComponent } from './whiteboard-save-as-menu/whiteboard-save-as-menu.component';
import { WhiteboardBrushToolComponent } from './whiteboard-brush-tool/whiteboard-brush-tool.component';
import { WhiteboardImageToolComponent } from './whiteboard-image-tool/whiteboard-image-tool.component';
import { WhiteboardLineToolComponent } from './whiteboard-line-tool/whiteboard-line-tool.component';
import { WhiteboardRectToolComponent } from './whiteboard-rect-tool/whiteboard-rect-tool.component';
import { WhiteboardEllipseToolComponent } from "./whiteboard-ellipse-tool/whiteboard-ellipse-tool.component";
import { WhiteboardTextToolComponent } from "./whiteboard-text-tool/whiteboard-text-tool.component";
import { WhiteboardEraserToolComponent } from './whiteboard-eraser-tool/whiteboard-eraser-tool.component';
import { WhiteboardColorToolComponent } from './whiteboard-color-tool/whiteboard-color-tool.component';
import { WhiteboardZoomPanelComponent } from './whiteboard-zoom-panel/whiteboard-zoom-panel.component';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-whiteboard-component',
  templateUrl: './whiteboard.component.html',
  styleUrls: ['../whiteboard.component.scss'],
  standalone:true,
  imports: [
    CommonModule,
    NgWhiteboardModule,
    MatTooltipModule,
    NgxColorsModule,
    MatDialogModule,
    WhiteboardSaveAsMenuComponent,
    WhiteboardAddImageComponent,
    WhiteboardUndoComponent,
    WhiteboardNewDocumentComponent,
    WhiteboardRedoComponent,
    WhiteboardSaveToDbComponent,
    WhitebordButtonToolComponent,
    WhiteboardBrushToolComponent,
    WhiteboardImageToolComponent,
    WhiteboardLineToolComponent,
    WhiteboardRectToolComponent,
    WhiteboardEllipseToolComponent,
    WhiteboardTextToolComponent,
    WhiteboardEraserToolComponent,
    WhiteboardColorToolComponent,
    WhiteboardZoomPanelComponent
],
  providers: [NgWhiteboardService],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class WhiteBoardComponent implements OnInit {
  @ViewChild('workarea', { static: false }) private workarea!: ElementRef<HTMLElement>;
  @ViewChild('whiteboard',{ static:false }) private whiteboard!: NgWhiteboardComponent

  protected selectedTool: ToolsEnum = ToolsEnum.BRUSH;
  protected selectedElement: WhiteboardElement | null = null;
  protected options = WHITEBOARD_OPTIONS;
  protected zoom = WHITEBOARD_ZOOM;
  protected isLoggedIn:boolean;
  private outerWidth = WHITEBOARD_OUTER_WIDTH;
  private outerHeight = WHITEBOARD_OUTER_HEIGHT;
  private x = WHITEBOARD_X;
  private y = WHITEBOARD_Y;
  private myself: any;
  private fireStore:Firestore;
  private auth:Auth;

  @ViewChild('mouseTrackerDiv', { static: true }) mouseTrackerDiv: ElementRef = {} as ElementRef;
  triggeredFromBehaviouSubject: boolean;
  boardID: string;
  boardLoading: boolean;
  base64Img: string;

  constructor(
    private _whiteboardService: NgWhiteboardService,
    private fluidService: FluidModelService,
    public sharedService:SharedService,
    private dialog:MatDialog,
    private toaster:ToastrService,
    private router:Router,
    private route: ActivatedRoute
  ) {}
  /**------------------------------------ Public Methods Start Here ----------------------------------------- */

  /**
   *
   * @param event
   * On key events like Backspace removes the selected element
   * On key events like ctrl+z and ctrl+y , performs undo and redo operations respectively
   */
  @HostListener('document:keyup', ['$event'])
  handleDeleteKeyboardEvent(event: KeyboardEvent) {
    if(event.key === 'Delete' || event.key === 'Backspace')
    {
      this.deleteSelectedElement()
    }
    else if(event.getModifierState && event.getModifierState('Control')){
      if(event.key === 'z'){
        this.undoSelectedElement()
      }
      else if(event.key === 'y'){
        this.redoSelectedElement()
      }
    }
  }

  ngOnInit(){
    this.sharedService.setHasWhiteBoardLoaded(true);
    this.initializeFluidService()
    this.auth = this.sharedService.getAuth();
    this.fireStore = this.sharedService.getFirestore();
    this.sharedService.isLoggedIn().subscribe(loggedIn => {
      this.isLoggedIn = !!loggedIn;
    })
    this.checkForMode();
  }

  /**
   *
   * @param tool
   * Updates the selected tool
   */
  toolSelectionChanged(tool:ToolsEnum){
    this.selectedTool = tool;
  }

  /**
   *
   * @param e
   * zooms and unzooms board based on zoom wheel motion
   */
  zoomWheel(e: Event) {
    const ev = e as WheelEvent;

    if (ev.altKey || ev.ctrlKey) {
      e.preventDefault();
      const zoom = this.zoom * 100;
      this.setZoom(Math.trunc(zoom - (ev.deltaY / 100) * (ev.altKey ? 10 : 5)));
    }
  }

  /**
   *
   * @param new_zoom
   * sets the zoom based on the parameter (percentage) passed
   */
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

  /**
   * keeps fluid service updated everytime there's some action performed on board
   */
  dataChanged():void{
     this.fluidService.updatewhiteBoardSharedMap(this.whiteboard.data)
  };

  /**
   * provides new board
   */
  newDocument() {
    this._whiteboardService.erase();
  }

  /**
   *
   * @param format -> based on the format downloads or copies the board data
   */
  saveAs(format: FormatType) {
    this._whiteboardService.save(format);
  }

  /**
   *
   * @param fileInput -> based on the image file selected uploads image to board
   */
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

  /**
   * undo operation
   */
  undo() {
    this._whiteboardService.undo();
  }

  /**
   * redo operation
   */
  redo() {
    this._whiteboardService.redo();
  }

  /**
   *
   * @param propName -> prop name supposed to be kept inline for the diagram, the param is either fill or strokeColor
   * @param color ->  color
   * takes propName and color and keeps the diagram updated with latest color selected
   */
  colorChange(propName: 'fill' | 'strokeColor', color) {
    if (this.selectedElement) {
      this.selectedElement.options[propName] = color;
    } else {
      this.options[propName] = color;
      this.options = this.options
      this.updateOptions();
    }
  }

  /**
   * swaps fill and stroke colors
   */
  swapColors() {
    [this.options.fill, this.options.strokeColor] = [this.options.strokeColor, this.options.fill];
    this.updateOptions();
  }

  /**
   *
   * @param element -> element of type @WhiteboardElement or @null
   * updates the slected element to the element provided in the param
   */
  setSelectedElement(element: WhiteboardElement | null) {
    this.selectedElement = element;
  }

  /**
   *
   * @param img
   * copies the image of type base64
   */
  onSave(img: string) {
    const cb = navigator.clipboard;
    if (cb) {
      this.base64Img = img
      cb.writeText(img);
    }
  }

  /**
   * saves the diagram to firestore
   */
  SaveToDB():void{
    if(!this.boardID){
      const dialog = this.dialog.open(SaveWhiteboardComponent,{
        width:'300px'
      })
      dialog.afterClosed().subscribe(result => {
        if(result){
          this.saveToFirestore(result)
        }
      });
      return;
    }
    this.saveToFirestore()


  }
  /**------------------------------------ Public Methods End Here ----------------------------------------- */

  /**------------------------------------ Private Methods Start Here ---------------------------------------- */
  /**
   *
   * @param name -> this is the user defined name provided for whiteboard
   * stores the diagram data to firestore
   */
  private async saveToFirestore(name?:string):Promise<void>{
    this.saveAs(FormatType.Base64);
    setTimeout(() => {
      if(this.boardID){
        this.editDoc();
      }
      else{
        this.addDoc(name);
      }
    }, 600);
  }

  private addDoc(name:string){
    const id = crypto.randomUUID();
    addDoc(collection(this.fireStore, 'boards'),{
      user: this.auth?.currentUser?.email || null,
      board: JSON.stringify(this.whiteboard.data),
      name,
      id: id,
      boardBase64:this.base64Img
    }).then((_)=>{
      this.boardID = _.id;
      this.router.navigate(['/whiteboard/board/'+this.boardID]);
      this.initializeFluidService();
      this.toaster.success('Board saved successfully', 'Success');
    })
  }

  private editDoc(){
    updateDoc(doc(this.fireStore, 'boards', this.boardID),{
      board: JSON.stringify(this.whiteboard.data),
      boardBase64:this.base64Img
    }).then(_ => {
      this.toaster.success('Board updated successfully', 'Success');
    })
  }
  /**
   * deletes the selected element
   */
  private deleteSelectedElement(){
    const selectedEleIndex = this.whiteboard.data.findIndex(d => d.id === this.selectedElement?.id);
    if(selectedEleIndex > -1){
      this.whiteboard.data.splice(selectedEleIndex, 1)
    }
  }
  /**
   * Performs undo operation on the board
   */
  private undoSelectedElement(){
    this._whiteboardService.undo()
  }

  /**
   * performs redo operation on the board
   */
  private redoSelectedElement(){
    this._whiteboardService.redo()
  }

  /**
   *
   * @param w - width of the elements
   * @param h - height of the elements
   * based on the zoom level updates size of diagram
   */
  private updateSize(w: number, h: number) {
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

  /**
   * provides the options for updation
   */
  private updateOptions() {
    this.options = Object.assign({}, this.options);
  }

  /**
   * Initializes fluid relay service
   */
  private async initializeFluidService(){
   this.sharedService.hasWhiteBoardLoaded$().subscribe(async loaded => {
      if(!location.hash){
              location.hash = this.fluidService?.fluidData?.containerID ?? ''
      }
      if(loaded){
        await this.fluidService.initFluid()
        this.myself = await this.fluidService.fluidData?.services.audience.getMyself();
        this.fluidService.behaviorSubjectObservable$.subscribe(data =>{
          this.triggeredFromBehaviouSubject = true
          this.whiteboard.data = data.elementToBeDrawn
        })
        renderMousePresence(this.fluidService.mouseTracker as MouseTracker,
        this.mouseTrackerDiv.nativeElement as HTMLDivElement , this.myself);
      }
    })
  }
  /**
   * Updates the whiteboard with stored data in case of existing boards
   */
  private setBoard(){
    const c = collection(this.fireStore, 'boards');
    const d = doc(c, this.boardID);
    this.boardLoading = true
    getDoc(d).then(d=>{
      this.boardLoading = false;
      this.fluidService.updatewhiteBoardSharedMap(JSON.parse(d.data()['board']));
    })
  }

  /**
   * checks and updates the board based on the mode , i.e create or update
   */
  private checkForMode(){
    this.route.params.subscribe(params => {
      if(params['id']){
        this.boardID = params['id'];
        this.setBoard();
      }
      else{
        if(location.hash !== this.fluidService?.fluidData?.containerID){
          this.fluidService.updatewhiteBoardSharedMap(null);
        }
      }
      this.sharedService.setIsNewBoard(!this.boardID);
    })
  }
  /*------------------------------------ Private Methods End Here ---------------------------------------- */
}
