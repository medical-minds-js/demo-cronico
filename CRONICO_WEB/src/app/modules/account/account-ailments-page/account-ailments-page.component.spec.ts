import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountAilmentsPageComponent } from './account-ailments-page.component';

describe('AccountAilmentsPageComponent', () => {
  let component: AccountAilmentsPageComponent;
  let fixture: ComponentFixture<AccountAilmentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountAilmentsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountAilmentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
