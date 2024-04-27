import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportDiagramDialogComponent } from './export-diagram-dialog.component';

describe('ExportDiagramDialogComponent', () => {
  let component: ExportDiagramDialogComponent;
  let fixture: ComponentFixture<ExportDiagramDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExportDiagramDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExportDiagramDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
