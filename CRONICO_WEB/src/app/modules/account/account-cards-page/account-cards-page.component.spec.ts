import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCardsPageComponent } from './account-cards-page.component';

describe('AccountCardsPageComponent', () => {
  let component: AccountCardsPageComponent;
  let fixture: ComponentFixture<AccountCardsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountCardsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountCardsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
