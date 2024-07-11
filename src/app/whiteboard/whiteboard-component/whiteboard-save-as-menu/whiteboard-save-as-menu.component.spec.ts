import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteboardSaveAsMenuComponent } from './whiteboard-save-as-menu.component';

describe('WhiteboardSaveAsMenuComponent', () => {
  let component: WhiteboardSaveAsMenuComponent;
  let fixture: ComponentFixture<WhiteboardSaveAsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhiteboardSaveAsMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhiteboardSaveAsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
