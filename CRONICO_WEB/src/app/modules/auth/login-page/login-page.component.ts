import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { observer } from '@core/functions/observer.function';
import { UserLogin } from '@core/interfaces/user-login';
import { AppStoreService } from '@core/store/app-store.service';
import { SessionService } from '@services/session/session.service';
import { SwaService } from '@services/swa/swa.service';
import { Login } from '../interfaces/login.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  readonly form: FormGroup = new FormGroup({});
  submited: boolean = false;
  private inputName: FormControl = new FormControl();
  private inputPassword: FormControl = new FormControl();

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
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
    ]);
    this.inputPassword = new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
    ]);
    this.addControls();
  }

  addControls() {
    Object.keys(this.form.controls).forEach((control) => {
      this.form.removeControl(control);
    });
    this.form.addControl('inputName', this.inputName);
    this.form.addControl('inputPassword', this.inputPassword);
  }

  onSubmit() {
    this.submited = true;
    if (this.form.valid) {
      this.swa.loading('Iniciando sesión...');
      const info: Login = {
        email: this.form.get('inputName')!.value,
        pass: this.form.get('inputPassword')!.value,
      };
      this.store.login(info).subscribe(
        observer(this.swa, () => {
          this.router.navigate(['/home']);
        })
      );
    }
  }
}
