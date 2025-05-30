import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteboardPickerComponent } from './whiteboard-picker.component';

describe('WhiteboardPickerComponent', () => {
  let component: WhiteboardPickerComponent;
  let fixture: ComponentFixture<WhiteboardPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhiteboardPickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhiteboardPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
