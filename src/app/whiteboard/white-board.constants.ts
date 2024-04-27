import { PaletteModel } from '@syncfusion/ej2-angular-diagrams';
import { NodeModel, ConnectorModel, FlowShapes, BasicShapes, MarginModel } from '@syncfusion/ej2-diagrams'
export const WHITEBOARD_HEADING = 'whiteboard';
export const EXPORT_ACTION_TEXT = 'export diagram';
export const EXPORT_DIALOG_CLOSE_TEXT = 'close'
export const EXPORT_HEADNING = 'export';
export const EXPORT_FILE_NAME_LABEL = 'Name'
export const EXPORT_FORMAT_LABEL = 'Export Format';
export const NAME_REQUIRED_ERROR: string = "Name is required";
export const NAME_INVALID_ERROR: string = "Name is invalid";
export const NAME_HINT_1:string = `* Name should only contain alphabets, numbers and only special character allowed is '_' `
export const NAME_HINT_2:string = `* Name should always start with alphabets`
export const EXPORT_OPTIONS:string[] = ['JPG','PNG','BMP','SVG']
export const FLOW_SHAPES: NodeModel[] = [
  { id: 'Terminator', shape: { type: 'Flow', shape: 'Terminator' } },
  { id: 'Process', shape: { type: 'Flow', shape: 'Process' } },
  { id: 'Decision', shape: { type: 'Flow', shape: 'Decision' } },
  { id: 'Document', shape: { type: 'Flow', shape: 'Document' } },
  { id: 'PreDefinedProcess', shape: { type: 'Flow', shape: 'PreDefinedProcess' } },
  { id: 'PaperTap', shape: { type: 'Flow', shape: 'PaperTap' } },
  { id: 'DirectData', shape: { type: 'Flow', shape: 'DirectData' } },
  { id: 'SequentialData', shape: { type: 'Flow', shape: 'SequentialData' } },
  { id: 'Sort', shape: { type: 'Flow', shape: 'Sort' } },
  { id: 'MultiDocument', shape: { type: 'Flow', shape: 'MultiDocument' } },
  { id: 'Collate', shape: { type: 'Flow', shape: 'Collate' } },
  { id: 'SummingJunction', shape: { type: 'Flow', shape: 'SummingJunction' } },
  { id: 'Or', shape: { type: 'Flow', shape: 'Or' } },
  {
    id: 'InternalStorage',
    shape: { type: 'Flow', shape: 'InternalStorage' }
  },
  { id: 'Extract', shape: { type: 'Flow', shape: 'Extract' } },
  {
    id: 'ManualOperation',
    shape: { type: 'Flow', shape: 'ManualOperation' }
  },
  { id: 'Merge', shape: { type: 'Flow', shape: 'Merge' } },
  {
    id: 'OffPageReference',
    shape: { type: 'Flow', shape: 'OffPageReference' }
  },
  {
    id: 'SequentialAccessStorage',
    shape: { type: 'Flow', shape: 'SequentialAccessStorage' }
  },
  { id: 'Annotation', shape: { type: 'Flow', shape: 'Annotation' } },
  { id: 'Annotation2', shape: { type: 'Flow', shape: 'Annotation2' } },
  { id: 'Data', shape: { type: 'Flow', shape: 'Data' } },
  { id: 'Card', shape: { type: 'Flow', shape: 'Card' } },
  { id: 'Delay', shape: { type: 'Flow', shape: 'Delay' } }
];
export const CONNECTOR_SYMBOLS  : ConnectorModel[] = [
  {
    id: 'Link1',
    type: 'Orthogonal',
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 60, y: 60 },
    targetDecorator: { shape: 'Arrow', style: {strokeColor: '#757575', fill: '#757575'} },
    style: { strokeWidth: 1, strokeColor: '#757575' }
  },
  {
    id: 'link3',
    type: 'Orthogonal',
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 60, y: 60 },
    style: { strokeWidth: 1, strokeColor: '#757575' },
    targetDecorator: { shape: 'None' }
  },
  {
    id: 'Link21',
    type: 'Straight',
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 60, y: 60 },
    targetDecorator: { shape: 'Arrow', style: {strokeColor: '#757575', fill: '#757575'} },
    style: { strokeWidth: 1, strokeColor: '#757575' }
  },
  {
    id: 'link23',
    type: 'Straight',
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 60, y: 60 },
    style: { strokeWidth: 1, strokeColor: '#757575' },
    targetDecorator: { shape: 'None' }
  },
  {
    id: 'link33',
    type: 'Bezier',
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 60, y: 60 },
    style: { strokeWidth: 1, strokeColor: '#757575' },
    targetDecorator: { shape: 'None' }
  }
];
export const BASCI_SHAPES: NodeModel[] = [{
  id: 'Rectangle',
  shape: {
      type: 'Basic',
      shape: 'Rectangle'
  }
},
{
  id: 'Ellipse',
  shape: {
      type: 'Basic',
      shape: 'Ellipse'
  }
},
{
  id: 'Hexagon',
  shape: {
      type: 'Basic',
      shape: 'Hexagon'
  }
},
{
  id:'Parallelogram',
  shape:{
    type:'Basic',
    shape:'Parallelogram'
  }
},
{
  id:'Triangle' ,
  shape:{
    type:'Basic',
    shape:'Triangle'
  }
},
{
id: "Plus",
shape: {
  shape: "Plus",
  type: "Basic"
}
}, {
id: "Star",
shape: {
  shape: "Star",
  type: "Basic"
}
}
, {
id: "Pentagon",
shape: {
  shape: "Pentagon",
  type: "Basic"
}
}, {
id: "Heptagon",
shape: {
  shape: "Heptagon",
  type: "Basic"
}
}, {
id: "Octagon",
shape: {
  shape: "Octagon",
  type: "Basic"
}
},
 {
id: "Trapezoid",
shape: {
  shape: "Trapezoid",
  type: "Basic"
}
}, {
id: "Decagon",
shape: {
  shape: "Decagon",
  type: "Basic"
}
}, {
id: "RightTriangle",
shape: {
  shape: "RightTriangle",
  type: "Basic"
}
},
{
id: "Cylinder",
shape: {
  shape: "Cylinder",
  type: "Basic"
}
}, {
id: "Diamond",
shape: {
  shape: "Diamond",
  type: "Basic"
}
}
];
export const PALLETES: PaletteModel[] = [
  {
    id:'basic',
    expanded:true,
    symbols:BASCI_SHAPES,
    iconCss:'shapes',
    title:'Basic Shapes'
  },
  {
    id: 'flow',
    expanded: true,
    symbols: FLOW_SHAPES,
    iconCss: 'shapes',
    title: 'Flow Shapes'
  },
  {
    id: 'connectors',
    expanded: true,
    symbols: CONNECTOR_SYMBOLS,
    iconCss: 'shapes',
    title: 'Connectors'
  },
];
export const SCROLL_MARGIN: MarginModel = { left: 15, right: 15, top: 15, bottom: 15 }
export const BASIC_SHAPE_ARRAY : BasicShapes[] = ['Cylinder', 'Diamond', 'Polygon', 'Decagon', 'Ellipse', 'Heptagon', 'Hexagon', 'Octagon','Parallelogram','Pentagon','Plus', 'Rectangle', 'RightTriangle', 'Star', 'Trapezoid', 'Triangle']
export const FLOW_SHAPE_ARRAY: FlowShapes[] = ['Annotation', 'Annotation2', 'Card','Collate','Data','Decision', 'Delay', 'DirectData', 'Display', 'Document','Extract', 'InternalStorage', 'LoopLimit', 'ManualInput', 'ManualOperation', 'Merge', 'MultiDocument', 'OffPageReference', 'Or', 'PaperTap', 'PreDefinedProcess', 'Preparation', 'Process', 'SequentialAccessStorage', 'SequentialData', 'Sort', 'StoredData', 'SummingJunction','Terminator']
