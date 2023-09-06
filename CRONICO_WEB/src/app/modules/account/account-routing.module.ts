import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountPageComponent } from './account-page/account-page.component';
import { AccountAilmentsPageComponent } from './account-ailments-page/account-ailments-page.component';
import { AccountAilmentsDetailPageComponent } from './account-ailments-detail-page/account-ailments-detail-page.component';
import { AccountAddressPageComponent } from './account-address-page/account-address-page.component';

const routes: Routes = [
  { path: '', component: AccountPageComponent },
  {
    path: 'ailments',
    component: AccountAilmentsPageComponent,
  },
  {
    path: 'address',
    component: AccountAddressPageComponent,
  },
  {
    path: 'ailments/:id',
    component: AccountAilmentsDetailPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
