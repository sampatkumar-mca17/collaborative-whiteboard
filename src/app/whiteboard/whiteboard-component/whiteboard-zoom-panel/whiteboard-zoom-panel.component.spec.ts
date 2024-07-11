import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteboardZoomPanelComponent } from './whiteboard-zoom-panel.component';

describe('WhiteboardZoomPanelComponent', () => {
  let component: WhiteboardZoomPanelComponent;
  let fixture: ComponentFixture<WhiteboardZoomPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhiteboardZoomPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhiteboardZoomPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
