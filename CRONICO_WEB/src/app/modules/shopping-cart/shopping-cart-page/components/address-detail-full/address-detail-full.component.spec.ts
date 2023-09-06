import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressDetailFullComponent } from './address-detail-full.component';

describe('AddressDetailFullComponent', () => {
  let component: AddressDetailFullComponent;
  let fixture: ComponentFixture<AddressDetailFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressDetailFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressDetailFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
