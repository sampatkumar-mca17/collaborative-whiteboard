import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteboardColorToolComponent } from './whiteboard-color-tool.component';

describe('WhiteboardColorToolComponent', () => {
  let component: WhiteboardColorToolComponent;
  let fixture: ComponentFixture<WhiteboardColorToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhiteboardColorToolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhiteboardColorToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
