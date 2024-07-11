import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteboardBrushToolComponent } from './whiteboard-brush-tool.component';

describe('WhiteboardBrushToolComponent', () => {
  let component: WhiteboardBrushToolComponent;
  let fixture: ComponentFixture<WhiteboardBrushToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhiteboardBrushToolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhiteboardBrushToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
