import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamsComponent } from './params.component';

describe('ParamsComponent', () => {
  let component: ParamsComponent;
  let fixture: ComponentFixture<ParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ParamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
