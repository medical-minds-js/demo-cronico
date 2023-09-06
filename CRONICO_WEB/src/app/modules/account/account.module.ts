import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountPageComponent } from './account-page/account-page.component';
import { AccountRoutingModule } from './account-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShoppingCartModule } from '../shopping-cart/shopping-cart.module';
import { UserDataFormComponent } from './components/user-data-form/user-data-form.component';
import { AccountAilmentsPageComponent } from './account-ailments-page/account-ailments-page.component';
import { AccountAilmentsDetailPageComponent } from './account-ailments-detail-page/account-ailments-detail-page.component';
import { AccountCardsPageComponent } from './account-cards-page/account-cards-page.component';
import { DoseSetupFormComponent } from './components/dose-setup-form/dose-setup-form.component';
import { AccountAddressPageComponent } from './account-address-page/account-address-page.component';

@NgModule({
  declarations: [
    AccountPageComponent,
    UserDataFormComponent,
    AccountAilmentsPageComponent,
    AccountAilmentsDetailPageComponent,
    AccountCardsPageComponent,
    DoseSetupFormComponent,
    AccountAddressPageComponent,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule,
    ShoppingCartModule,
  ],
})
export class AccountModule {}
