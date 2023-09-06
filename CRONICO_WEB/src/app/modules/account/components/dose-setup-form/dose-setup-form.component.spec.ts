import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoseSetupFormComponent } from './dose-setup-form.component';

describe('DoseSetupFormComponent', () => {
  let component: DoseSetupFormComponent;
  let fixture: ComponentFixture<DoseSetupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoseSetupFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoseSetupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
