import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteboardLineToolComponent } from './whiteboard-line-tool.component';

describe('WhiteboardLineToolComponent', () => {
  let component: WhiteboardLineToolComponent;
  let fixture: ComponentFixture<WhiteboardLineToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhiteboardLineToolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhiteboardLineToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
