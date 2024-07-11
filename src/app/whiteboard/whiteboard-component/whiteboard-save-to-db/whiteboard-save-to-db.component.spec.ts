import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteboardSaveToDbComponent } from './whiteboard-save-to-db.component';

describe('WhiteboardSaveToDbComponent', () => {
  let component: WhiteboardSaveToDbComponent;
  let fixture: ComponentFixture<WhiteboardSaveToDbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhiteboardSaveToDbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhiteboardSaveToDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
