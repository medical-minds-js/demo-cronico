import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { ResetPasswordPageComponent } from './reset-password-page/reset-password-page.component';
import { RecoveryPassPageComponent } from './recovery-pass-page/recovery-pass-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegistrationPageComponent },
  { path: 'reset-pass', component: ResetPasswordPageComponent },
  { path: 'recovery-pass', component: RecoveryPassPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
