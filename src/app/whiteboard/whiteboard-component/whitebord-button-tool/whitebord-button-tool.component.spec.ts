import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhitebordButtonToolComponent } from './whitebord-button-tool.component';

describe('WhitebordButtonToolComponent', () => {
  let component: WhitebordButtonToolComponent;
  let fixture: ComponentFixture<WhitebordButtonToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhitebordButtonToolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhitebordButtonToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
