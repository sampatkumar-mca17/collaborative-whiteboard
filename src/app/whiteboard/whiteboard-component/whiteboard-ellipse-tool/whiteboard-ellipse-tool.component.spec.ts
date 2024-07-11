import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteboardEllipseToolComponent } from './whiteboard-ellipse-tool.component';

describe('WhiteboardEllipseToolComponent', () => {
  let component: WhiteboardEllipseToolComponent;
  let fixture: ComponentFixture<WhiteboardEllipseToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhiteboardEllipseToolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhiteboardEllipseToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
