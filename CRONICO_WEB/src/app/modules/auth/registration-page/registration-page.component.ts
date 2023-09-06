import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { observer } from '@core/functions/observer.function';
import { UserLogin } from '@core/interfaces/user-login';
import { AppStoreService } from '@core/store/app-store.service';
import { SessionService } from '@services/session/session.service';
import { SwaService } from '@services/swa/swa.service';
import { Register } from '../interfaces/register.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
})
export class RegistrationPageComponent implements OnInit {
  readonly form: FormGroup = new FormGroup({});
  submited: boolean = false;
  private inputName: FormControl = new FormControl();
  private inputFirstSurname: FormControl = new FormControl();
  private inputSecondSurname: FormControl = new FormControl();
  private inputEmail: FormControl = new FormControl();
  private inputPwd: FormControl = new FormControl();
  private inputPwdConfirm: FormControl = new FormControl();

  constructor(
    private router: Router,
    private swa: SwaService,
    private store: AppStoreService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.inputName = new FormControl(null, [
      Validators.required,
      Validators.maxLength(200),
    ]);
    this.inputFirstSurname = new FormControl(null, [
      Validators.required,
      Validators.maxLength(200),
    ]);
    this.inputSecondSurname = new FormControl(null, [
      Validators.required,
      Validators.maxLength(200),
    ]);
    this.inputEmail = new FormControl(null, [
      Validators.required,
      Validators.email,
      Validators.maxLength(100),
    ]);
    this.inputPwd = new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(200),
    ]);
    this.inputPwdConfirm = new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(200),
    ]);

    this.addControls();
  }

  addControls() {
    Object.keys(this.form.controls).forEach((control) => {
      this.form.removeControl(control);
    });
    this.form.addControl('inputName', this.inputName);
    this.form.addControl('inputFirstSurname', this.inputFirstSurname);
    this.form.addControl('inputSecondSurname', this.inputSecondSurname);
    this.form.addControl('inputEmail', this.inputEmail);
    this.form.addControl('inputPwd', this.inputPwd);
    this.form.addControl('inputPwdConfirm', this.inputPwdConfirm);
  }

  onSubmit(data: any) {
    this.submited = true;
    this.validatePass();
    if (this.form.valid) {
      this.swa.loading();
      const info: Register = {
        name: this.form.get('inputName')?.value,
        surname: this.form.get('inputFirstSurname')?.value,
        secondSurname: this.form.get('inputSecondSurname')?.value,
        email: this.form.get('inputEmail')?.value,
        pass: this.form.get('inputPwd')?.value,
      };
      this.store.register(info).subscribe(
        observer(this.swa, () => {
          this.router.navigate(['/home']);
        })
      );
    }
  }

  validatePass() {
    let pass: string = this.form.get('inputPwd')?.value;
    let passConf: string = this.form.get('inputPwdConfirm')?.value;
    if (pass == passConf) {
      this.form.get('inputPwdConfirm')?.setErrors(null);
      return true;
    } else {
      this.form.get('inputPwdConfirm')?.setErrors({
        noMatch: true,
      });
      return false;
    }
  }
}
