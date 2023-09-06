import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountAddressPageComponent } from './account-address-page.component';

describe('AccountAddressPageComponent', () => {
  let component: AccountAddressPageComponent;
  let fixture: ComponentFixture<AccountAddressPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountAddressPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountAddressPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
