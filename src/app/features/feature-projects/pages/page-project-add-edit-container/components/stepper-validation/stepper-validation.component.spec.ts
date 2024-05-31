import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperValidationComponent } from './stepper-validation.component';

describe('StepperValidationComponent', () => {
  let component: StepperValidationComponent;
  let fixture: ComponentFixture<StepperValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
