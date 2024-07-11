import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteboardMenuComponent } from './whiteboard-menu.component';

describe('WhiteboardMenuComponent', () => {
  let component: WhiteboardMenuComponent;
  let fixture: ComponentFixture<WhiteboardMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhiteboardMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhiteboardMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
