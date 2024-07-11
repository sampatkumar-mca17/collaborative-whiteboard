import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteboardTextToolComponent } from './whiteboard-text-tool.component';

describe('WhiteboardTextToolComponent', () => {
  let component: WhiteboardTextToolComponent;
  let fixture: ComponentFixture<WhiteboardTextToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhiteboardTextToolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhiteboardTextToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
