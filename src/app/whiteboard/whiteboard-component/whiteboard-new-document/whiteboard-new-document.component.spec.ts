import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteboardNewDocumentComponent } from './whiteboard-new-document.component';

describe('WhiteboardNewDocumentComponent', () => {
  let component: WhiteboardNewDocumentComponent;
  let fixture: ComponentFixture<WhiteboardNewDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhiteboardNewDocumentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhiteboardNewDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
