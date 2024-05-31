import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperWorkflowMenuComponent } from './stepper-workflow-menu.component';

describe('StepperWorkflowMenuComponent', () => {
  let component: StepperWorkflowMenuComponent;
  let fixture: ComponentFixture<StepperWorkflowMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperWorkflowMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperWorkflowMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
