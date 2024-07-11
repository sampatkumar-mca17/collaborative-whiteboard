import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteboardUndoComponent } from './whiteboard-undo.component';

describe('WhiteboardUndoComponent', () => {
  let component: WhiteboardUndoComponent;
  let fixture: ComponentFixture<WhiteboardUndoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhiteboardUndoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhiteboardUndoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
