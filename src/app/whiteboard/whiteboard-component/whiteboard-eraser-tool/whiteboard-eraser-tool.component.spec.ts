import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteboardEraserToolComponent } from './whiteboard-eraser-tool.component';

describe('WhiteboardEraserToolComponent', () => {
  let component: WhiteboardEraserToolComponent;
  let fixture: ComponentFixture<WhiteboardEraserToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhiteboardEraserToolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhiteboardEraserToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
