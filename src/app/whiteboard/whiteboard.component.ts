import { FontAwesomeModule, FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faDownload, faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { ExportOptions } from './../models/whiteboard.model';
import { Component, ViewChild, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common'
import {  Diagram, DiagramComponent, DiagramModule, DiagramTools, ISelectionChangeEventArgs, NodeModel, ShapeStyleModel, IExportOptions, PrintAndExport, Shapes, SymbolPaletteComponent } from '@syncfusion/ej2-angular-diagrams';
import { SymbolPaletteModule, PaletteModel, MarginModel, SymbolInfo, StrokeStyleModel, BpmnDiagramsService, } from '@syncfusion/ej2-angular-diagrams'
import { ExpandMode } from '@syncfusion/ej2-navigations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogConfig } from '@angular/material/dialog';
import { ExportDiagramDialogComponent } from './export-diagram-dialog/export-diagram-dialog.component';
import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import * as whiteboardConstants from './white-board.constants'



Diagram.Inject(PrintAndExport)
@Component({
  selector: 'app-whiteboard',
  standalone: true,
  imports: [
    DiagramModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    FontAwesomeModule,
    FaIconComponent,
    SymbolPaletteModule,
    CommonModule
  ],
  providers:[BpmnDiagramsService],
  templateUrl: './whiteboard.component.html',
  styleUrl: './whiteboard.component.scss'
})
export class WhiteboardComponent implements OnDestroy {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;

    @ViewChild("symbolpalette") public symbolPalette? : SymbolPaletteComponent
    public drawingshape?: any;
    public node?: NodeModel;
    public faDownload = faDownload
    public faChevronCircleRight = faChevronCircleRight
    public faChevronCircleLeft = faChevronCircleLeft
    public showShapes:boolean = true
    public whiteBoardConstants = whiteboardConstants
    public expandMode:ExpandMode = 'Multiple'
    public palettes: PaletteModel[] = whiteboardConstants.PALLETES
    public symbolMargin: MarginModel = whiteboardConstants.SCROLL_MARGIN;
    private ngDestroy: Subject<boolean> = new Subject();
    /**
     *
     * @param dialog : instance of MatDialog
     */
    constructor(private dialog:MatDialog){}

    /**
     *
     * @param node : a node that will be drawn on the canvas
     * @returns updates the style of the node and returns it
     */
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        ((node as NodeModel).style as ShapeStyleModel).fill = "#6BA5D7";
        ((node as NodeModel).style as ShapeStyleModel).strokeColor = "White";
        return node;
    }

    /**
     *
     * @param args :contains information about the diagram
     */
    public created(args: Object): void {
        //JSON to create a rectangle
        this.setDrawingShape('Basic','Ellipses');
        //To draw an object once, activate draw once
        (this.diagram as Diagram).tool = DiagramTools.Default |DiagramTools.ContinuousDraw ;
        (this.diagram as Diagram).dataBind();
    }

    /**
     * the below functions changes the tool functioanility based on the selection of nodes
     * @param event : contains node selection details
     */
    public onSelectionChange(event: ISelectionChangeEventArgs){
      if(event.newValue.length === 0){
        (this.diagram as Diagram).tool = DiagramTools.ContinuousDraw | DiagramTools.SingleSelect
      }
      else{
        (this.diagram as Diagram).tool = DiagramTools.SingleSelect
      }
    }

    /**
     * exports the current diagram as user selected format
     */
    public exportDiagram(){
      const dialogOptions:MatDialogConfig = {
        width: '350px',
        height: '280px'
      }
      const dialogRef = this.dialog.open(ExportDiagramDialogComponent,dialogOptions);
      dialogRef.afterClosed().pipe(takeUntil(this.ngDestroy)).subscribe((options:ExportOptions) => {
        if(options){
          const exportOptions:IExportOptions = {}
          exportOptions.mode ='Download'
          exportOptions.format = options.exportType
          exportOptions.fileName = options.name
          this.diagram?.exportDiagram(exportOptions)
        }

      })
    }
    /**
     *
     * @param symbol -> symbol details (ex: basic, flow, etc)
     * @returns -> makes the symbols fit to the width and height of the parent
     */
    public getSymbolInfo(symbol: NodeModel): SymbolInfo {
      return { fit: true};
    }

    /**
     *
     * @param symbol -> symbol details(ex:basic, flow, etc)
     * provides default configuration for each symbol
     */
    public getSymbolDefaults(symbol: NodeModel): void {
      ((symbol.style as StrokeStyleModel).strokeColor) = '#757575';
      if (symbol.id === 'Terminator' || symbol.id === 'Process') {
        symbol.width = 80;
        symbol.height = 40;
      } else if (
        symbol.id === 'Decision' ||
        symbol.id === 'Document' ||
        symbol.id === 'PreDefinedProcess' ||
        symbol.id === 'PaperTap' ||
        symbol.id === 'DirectData' ||
        symbol.id === 'MultiDocument' ||
        symbol.id === 'Data'
      ) {
        symbol.width = 50;
        symbol.height = 40;
      } else {
        symbol.width = 50;
        symbol.height = 50;
      }
    }

    /**
     *
     * @param event -> palette selection change event, which consists of old symbol and new symbol
     * sets the drawing object to the selected shape
     */
    public paletteSelectionChang(event){
      if(whiteboardConstants.BASIC_SHAPE_ARRAY.includes(event.newValue)){
        this.setDrawingShape('Basic',event.newValue)
      }
      else if(whiteboardConstants.FLOW_SHAPE_ARRAY.includes(event.newValue)){
        this.setDrawingShape('Flow', event.newValue)
      }
    }

    /**
     *
     * @param type -> type of the shape (ex: Basic)
     * @param shape -> name of the shape (ex: Rectangle)
     * adds the particular shape to drawing object
     */
    private setDrawingShape(type:Shapes,shape:string){
      this.drawingshape = { type: type, shape: shape};
        this.node = {
            shape: this.drawingshape
        };
        (this.diagram as Diagram).drawingObject = this.node;
    }

    /**
     * removes every subscriptions on destroy of component, hence releasing memory resources
     */
    ngOnDestroy(): void {
      this.ngDestroy.next(true);
      this.ngDestroy.complete();
    }
}
