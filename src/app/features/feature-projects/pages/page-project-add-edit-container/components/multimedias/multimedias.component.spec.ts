import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimediasComponent } from './multimedias.component';

describe('MultimediasComponent', () => {
  let component: MultimediasComponent;
  let fixture: ComponentFixture<MultimediasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MultimediasComponent]
    });
    fixture = TestBed.createComponent(MultimediasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
