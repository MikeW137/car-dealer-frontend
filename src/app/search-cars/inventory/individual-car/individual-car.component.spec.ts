import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualCarComponent } from './individual-car.component';

describe('IndividualCarComponent', () => {
  let component: IndividualCarComponent;
  let fixture: ComponentFixture<IndividualCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
