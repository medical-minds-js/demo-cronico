import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuySupplyModalComponent } from './buy-supply-modal.component';

describe('BuySupplyModalComponent', () => {
  let component: BuySupplyModalComponent;
  let fixture: ComponentFixture<BuySupplyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuySupplyModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuySupplyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
