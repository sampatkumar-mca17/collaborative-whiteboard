import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteboardImageToolComponent } from './whiteboard-image-tool.component';

describe('WhiteboardImageToolComponent', () => {
  let component: WhiteboardImageToolComponent;
  let fixture: ComponentFixture<WhiteboardImageToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhiteboardImageToolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhiteboardImageToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
