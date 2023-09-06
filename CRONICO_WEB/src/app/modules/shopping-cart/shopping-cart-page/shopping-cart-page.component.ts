import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { observer } from '@core/functions/observer.function';
import { Address } from '@core/interfaces/address.interface';
import { Card } from '@core/interfaces/cards.interface';
import { CreateCard } from '@core/interfaces/create-card.interface';
import { DeliveryTime } from '@core/interfaces/deliveries-times-interface';
import { ApiDataResponse } from '@core/interfaces/http.interfaces';
import { ShoppingCart } from '@core/interfaces/order.interface';
import { AppStoreService } from '@core/store/app-store.service';
import { AppState } from '@core/store/app-store.state';
import { OpenPayService } from '@services/open-pay/open-pay.service';
import { SwaService } from '@services/swa/swa.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.scss'],
})
export class ShoppingCartPageComponent implements OnInit {
  public tab: number = 1;
  state$: Observable<AppState> = new Subject<AppState>();

  protected ngUnsubscribe: Subject<void> = new Subject<void>();
  constructor(
    public store: AppStoreService,
    public swa: SwaService,
    private router: Router,
    private openPayService: OpenPayService
  ) {
    this.state$ = this.store.getState();
  }

  ngOnInit(): void {
    this.swa.loading();
    this.store
      .loadShoppingCart()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        observer(this.swa, () => {
          this.swa.close();
        })
      );
  }

  changeTab(tab: number) {
    if (tab == 2) {
      this.swa.loading();
      this.store.closeEditShoppingCart().subscribe(
        observer(this.swa, () => {
          this.swa.close();
          this.tab = tab;
        })
      );
    } else {
      this.tab = tab;
    }
  }

  onConfirm(e: any) {
    if (this.store.validateDeviseSession()) {
      this.validateConfirm();
    } else {
      const sessionId = this.openPayService.generateDeviseSession(
        'previousConfirm',
        'device_session_id'
      );
      this.store.setDeviceSession(sessionId);
      this.validateConfirm();
    }
  }

  validateConfirm() {
    this.swa.confirm('¿Desea confirmar la compra?', '', (result) => {
      if (result.value) {
        this.swa.loading();
        this.store
          .confirmOrder()
          .pipe(takeUntil(this.ngUnsubscribe))
          .subscribe(
            observer(this.swa, () => {
              this.swa.close();
              this.swa.success('Compra realizada');
              this.router.navigate(['/orders']);
            })
          );
      }
    });
  }

  showEditItemShoppingCart(item: ShoppingCart) {
    this.store.editShoppingCart(item);
  }

  closeEditItemShoppingCart() {
    this.swa.loading();
    this.store.closeEditShoppingCart().subscribe(observer(this.swa));
  }

  addDose(item: ShoppingCart) {
    this.store.addDoseShoppingCart(item);
  }

  resDose(item: ShoppingCart) {
    this.store.resShoppingCart(item);
  }

  addPieces(item: ShoppingCart) {
    this.store.addPiecesShoppingCart(item);
  }

  resPieces(item: ShoppingCart) {
    this.store.resPiecesShoppingCart(item);
  }

  deleteItemShoppingCart(item: ShoppingCart) {
    this.swa.confirm('¿Desea eliminar este producto?', '', (result) => {
      if (result.value) {
        this.swa.loading();
        this.store
          .deleteShoppingCart(item.id)
          .pipe(takeUntil(this.ngUnsubscribe))
          .subscribe(
            observer(this.swa, () => {
              this.swa.close();
              this.swa.success('Producto eliminado');
            })
          );
      }
    });
  }

  showFormCreateAddress() {
    this.store.showAddAddressForm();
  }

  closeFormAddAddress() {
    this.store.closeFormAddAddress();
  }

  createAddress(event$: Address) {
    this.swa.confirm('¿Desea agregar esta dirección?', '', (result) => {
      if (result.value) {
        this.swa.loading();
        this.store
          .saveAddress(event$)
          .pipe(takeUntil(this.ngUnsubscribe))
          .subscribe(
            observer(this.swa, () => {
              this.swa.close();
              this.closeFormAddAddress();
              this.swa.success('Dirección agregada');
            })
          );
      }
    });
  }

  showAddressEditForm(item: Address) {
    this.store.showAddressEditForm(item);
  }

  closeAddressEditForm() {
    this.store.closeAddressEditForm();
  }

  editAddress(data: Address) {
    this.swa.confirm('¿Desea guardarlos cambios?', '', (result) => {
      if (result.value) {
        this.swa.loading();
        this.store
          .editAddress(data)
          .pipe(takeUntil(this.ngUnsubscribe))
          .subscribe(
            observer(this.swa, () => {
              this.swa.close();
              this.closeAddressEditForm();
              this.swa.success('Dirección actualizada');
            })
          );
      }
    });
  }

  predeterminateAddress(item: Address) {
    this.swa.loading();
    this.store
      .setActiveAddress(item.id)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(observer(this.swa));
  }

  showEditDeliveryForm(item: Address) {
    this.store.showEditDeliveryForm(item);
  }

  closeFormDelivery() {
    this.store.closeEditDeliveryForm();
  }

  editDelivery(deliveries: DeliveryTime[]) {
    this.swa.confirm('¿Desea guardarlos cambios?', '', (result) => {
      if (result.value) {
        this.swa.loading();
        this.store
          .editDelivery(deliveries)
          .pipe(takeUntil(this.ngUnsubscribe))
          .subscribe(
            observer(this.swa, () => {
              this.swa.close();
              this.closeFormDelivery();
              this.swa.success('Horario actualizado');
            })
          );
      }
    });
  }

  shoppingAddCard() {
    this.store.shoppingAddCard();
  }

  shoppingCloseAddCard() {
    this.store.shoppingCloseAddCard();
  }

  async createCard(data: any) {
    const deviceSessionId = this.openPayService.generateDeviseSession(
      'payment-form',
      'device_session_id'
    );
    this.swa.loading();
    this.store
      .getPaymentId()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        observer(this.swa, async (response: ApiDataResponse<string>) => {
          const cardOpePay = await this.openPayService.generateCard(
            'payment-form',
            response.data
          );
          const card: CreateCard = {
            active: 1,
            cardOpenPayId: cardOpePay.data.id,
            deviceSession: deviceSessionId,
          };
          this.store
            .addCardByUser(card)
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe(
              observer(this.swa, () => {
                this.swa.close();
                this.store.setDeviceSession(deviceSessionId);
              })
            );
        })
      );
  }

  changeActiveCard(item: Card) {
    this.swa.loading();
    this.store
      .setDefaultCard(item)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(observer(this.swa));
  }

  getPostalCode(code: number) {
    this.swa.loading();
    this.store
      .loadPostalCodes(code)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(observer(this.swa));
  }
}
