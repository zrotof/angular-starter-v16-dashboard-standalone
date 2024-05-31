import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevNextStepperComponent } from './prev-next-stepper.component';

describe('PrevNextStepperComponent', () => {
  let component: PrevNextStepperComponent;
  let fixture: ComponentFixture<PrevNextStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrevNextStepperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrevNextStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
