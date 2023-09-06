import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardDetailFullComponent } from './credit-card-detail-full.component';

describe('CreditCardDetailFullComponent', () => {
  let component: CreditCardDetailFullComponent;
  let fixture: ComponentFixture<CreditCardDetailFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCardDetailFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardDetailFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
