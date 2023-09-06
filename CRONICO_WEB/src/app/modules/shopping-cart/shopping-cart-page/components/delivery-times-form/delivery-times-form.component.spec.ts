import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryTimesFormComponent } from './delivery-times-form.component';

describe('DeliveryTimesFormComponent', () => {
  let component: DeliveryTimesFormComponent;
  let fixture: ComponentFixture<DeliveryTimesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeliveryTimesFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryTimesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
