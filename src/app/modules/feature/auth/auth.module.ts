import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './containers/login/login.component';
import { SignUpComponent } from './containers/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './containers/forgot-password/forgot-password.component';
import { VerifyEmailAddressComponent } from './containers/verify-email-address/verify-email-address.component';
import { NgZorroModule } from '@misson-control/ng-zorro';
import { NgSharedModule } from '@misson-control/shared';

@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailAddressComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, NgZorroModule, NgSharedModule],
})
export class AuthModule {}
