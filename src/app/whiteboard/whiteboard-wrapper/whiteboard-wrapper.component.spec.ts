import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteboardWrapperComponent } from './whiteboard-wrapper.component';

describe('WhiteboardWrapperComponent', () => {
  let component: WhiteboardWrapperComponent;
  let fixture: ComponentFixture<WhiteboardWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhiteboardWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhiteboardWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
