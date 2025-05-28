import { Component } from '@angular/core';
import Konva from 'konva';
@Component({
  selector: 'app-circle',
  imports: [],
  templateUrl: './circle.component.html',
  styleUrl: './circle.component.scss'
})
export class CircleComponent {
  width = window.innerWidth;
  height = window.innerHeight;
  layer = new Konva.Layer();
  rect = new Konva.Rect({
    x: 50,
    y: 50,
    width: 100,
    height: 100,
    fill: 'yellow',
    stroke: 'black',
    draggable: true,
    });
  stage = new Konva.Stage({
  container: 'container',
  width: this.width,
  height: this.height,
  });
  
  ngOnInit(): void {
    this.stage.add(this.layer);
    this.layer.add(this.rect);
   
  const tr = new Konva.Transformer({
  nodes: [this.rect],
  anchorStyleFunc: (anchor) => {
  // make all anchors circles
  anchor.cornerRadius(50);
  // make all anchors red
  anchor.fill('red');
  
      // make right-middle bigger
      if (anchor.hasName('middle-right')) {
        anchor.scale({ x: 2, y: 2 });
      }
      // make top-left invisible
      if (anchor.hasName('top-left')) {
        anchor.scale({ x: 0, y: 0 });
      }
  
  },
  });
  this.layer.add(tr);
  }
}
