import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartPageComponent } from './shopping-cart-page/shopping-cart-page.component';
import { ShoopingCartRoutingModule } from './shopping-cart-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddressEditFormComponent } from './shopping-cart-page/components/address-edit-form/address-edit-form.component';
import { DeliveryTimesFormComponent } from './shopping-cart-page/components/delivery-times-form/delivery-times-form.component';
import { CreditCardFormComponent } from './shopping-cart-page/components/credit-card-form/credit-card-form.component';
import { AddressDetailComponent } from './shopping-cart-page/components/address-detail/address-detail.component';
import { AddressDetailFullComponent } from './shopping-cart-page/components/address-detail-full/address-detail-full.component';
import { PreviewProductsComponent } from './shopping-cart-page/components/preview-products/preview-products.component';
import { CreditCardDetailComponent } from './shopping-cart-page/components/credit-card-detail/credit-card-detail.component';
import { CreditCardDetailFullComponent } from './shopping-cart-page/components/credit-card-detail-full/credit-card-detail-full.component';
import { ShoppingCartProductsComponent } from './shopping-cart-page/components/shopping-cart-products/shopping-cart-products.component';

@NgModule({
  declarations: [
    ShoppingCartPageComponent,
    AddressEditFormComponent,
    DeliveryTimesFormComponent,
    CreditCardFormComponent,
    AddressDetailComponent,
    AddressDetailFullComponent,
    PreviewProductsComponent,
    CreditCardDetailComponent,
    CreditCardDetailFullComponent,
    ShoppingCartProductsComponent,
  ],
  imports: [CommonModule, ShoopingCartRoutingModule, SharedModule],
  exports: [
    AddressEditFormComponent,
    AddressDetailFullComponent,
    DeliveryTimesFormComponent,
    CreditCardFormComponent,
  ],
})
export class ShoppingCartModule {}
