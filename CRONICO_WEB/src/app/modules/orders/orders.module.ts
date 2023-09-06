import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrdersPageComponent } from './orders-page/orders-page.component';
import { OrdersDetailComponent } from './orders-detail/orders-detail.component';
import { OrderEditFormComponent } from './components/order-edit-form/order-edit-form.component';

@NgModule({
  declarations: [OrdersPageComponent, OrdersDetailComponent, OrderEditFormComponent],
  imports: [CommonModule, OrdersRoutingModule, SharedModule],
})
export class OrdersModule {}
