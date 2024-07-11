import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteboardRectToolComponent } from './whiteboard-rect-tool.component';

describe('WhiteboardRectToolComponent', () => {
  let component: WhiteboardRectToolComponent;
  let fixture: ComponentFixture<WhiteboardRectToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhiteboardRectToolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhiteboardRectToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
