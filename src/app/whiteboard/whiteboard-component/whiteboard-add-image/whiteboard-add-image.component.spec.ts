import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteboardAddImageComponent } from './whiteboard-add-image.component';

describe('WhiteboardAddImageComponent', () => {
  let component: WhiteboardAddImageComponent;
  let fixture: ComponentFixture<WhiteboardAddImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhiteboardAddImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhiteboardAddImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
