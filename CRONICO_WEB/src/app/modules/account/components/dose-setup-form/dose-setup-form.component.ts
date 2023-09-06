import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '@core/interfaces/user';
import { UserAilmentsProduct } from '@core/interfaces/user-ailments';

@Component({
  selector: 'app-dose-setup-form',
  templateUrl: './dose-setup-form.component.html',
  styleUrls: ['./dose-setup-form.component.scss'],
})
export class DoseSetupFormComponent implements OnInit {
  @Input() data: UserAilmentsProduct = {} as UserAilmentsProduct;
  @Output() submitForm = new EventEmitter<UserAilmentsProduct>();
  @Output() closeForm = new EventEmitter<UserAilmentsProduct>();
  submited: boolean = false;
  readonly form: FormGroup = new FormGroup({});
  inputFirstTake: FormControl = new FormControl();
  inputPeriod: FormControl = new FormControl();
  constructor() {}

  ngOnDestroy(): void {
    this.submited = false;
    this.form.reset();
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.inputFirstTake = new FormControl(this.data.firstTake, [
      Validators.required,
      Validators.maxLength(100),
    ]);
    this.inputPeriod = new FormControl(this.data.intakePeriod, [
      Validators.required,
      Validators.maxLength(100),
    ]);

    Object.keys(this.form.controls).forEach((control) => {
      this.form.removeControl(control);
    });
    this.form.addControl('inputFirstTake', this.inputFirstTake);
    this.form.addControl('inputPeriod', this.inputPeriod);
  }

  close() {
    this.closeForm.emit(this.data);
  }

  editUser() {
    let newUser: UserAilmentsProduct = {
      id: this.data.id,
      firstTake: this.form.get('inputFirstTake')?.value,
      intakePeriod: this.form.get('inputPeriod')?.value,
    } as UserAilmentsProduct;
    this.submitForm.emit(newUser);
  }
}
