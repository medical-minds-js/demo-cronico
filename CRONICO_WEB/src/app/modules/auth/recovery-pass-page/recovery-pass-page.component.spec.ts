import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryPassPageComponent } from './recovery-pass-page.component';

describe('RecoveryPassPageComponent', () => {
  let component: RecoveryPassPageComponent;
  let fixture: ComponentFixture<RecoveryPassPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecoveryPassPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryPassPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
