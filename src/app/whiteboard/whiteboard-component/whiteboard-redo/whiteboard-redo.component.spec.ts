import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteboardRedoComponent } from './whiteboard-redo.component';

describe('WhiteboardRedoComponent', () => {
  let component: WhiteboardRedoComponent;
  let fixture: ComponentFixture<WhiteboardRedoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhiteboardRedoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhiteboardRedoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
