import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { ResetPasswordPageComponent } from './reset-password-page/reset-password-page.component';
import { RecoveryPassPageComponent } from './recovery-pass-page/recovery-pass-page.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    LoginPageComponent,
    RegistrationPageComponent,
    ResetPasswordPageComponent,
    RecoveryPassPageComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, SharedModule],
})
export class AuthModule {}
