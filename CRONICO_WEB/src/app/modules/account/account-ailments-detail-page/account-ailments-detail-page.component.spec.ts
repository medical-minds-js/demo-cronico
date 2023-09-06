import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountAilmentsDetailPageComponent } from './account-ailments-detail-page.component';

describe('AccountAilmentsDetailPageComponent', () => {
  let component: AccountAilmentsDetailPageComponent;
  let fixture: ComponentFixture<AccountAilmentsDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountAilmentsDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountAilmentsDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
