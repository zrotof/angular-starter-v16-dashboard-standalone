import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalitiesComponent } from './functionalities.component';

describe('FunctionalitiesComponent', () => {
  let component: FunctionalitiesComponent;
  let fixture: ComponentFixture<FunctionalitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FunctionalitiesComponent]
    });
    fixture = TestBed.createComponent(FunctionalitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
