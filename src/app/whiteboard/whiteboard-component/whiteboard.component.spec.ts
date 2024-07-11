import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteBoardComponent } from './whiteboard.component';

describe('WhiteboardComponent', () => {
  let component: WhiteBoardComponent;
  let fixture: ComponentFixture<WhiteBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhiteBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhiteBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
