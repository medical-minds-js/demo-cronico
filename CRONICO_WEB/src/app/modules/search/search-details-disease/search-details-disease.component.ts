import { Component, OnInit, ViewChild } from '@angular/core';
import { BuySupplyModalComponent } from '../modals/buy-supply-modal/buy-supply-modal.component';
import { ModalService } from 'src/app/services/modal/modal.service';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { AppState } from '@core/store/app-store.state';
import { AppStoreService } from '@core/store/app-store.service';
import { SwaService } from '@services/swa/swa.service';
import { takeUntil } from 'rxjs/operators';
import { observer } from '@core/functions/observer.function';
import { Product } from '@core/interfaces/product.interface';
import { ShoppingCart } from '@core/interfaces/order.interface';

@Component({
  selector: 'app-search-details-disease',
  templateUrl: './search-details-disease.component.html',
  styleUrls: ['./search-details-disease.component.scss'],
})
export class SearchDetailsDiseaseComponent implements OnInit {
  state$: Observable<AppState> = new Subject<AppState>();
  protected ngUnsubscribe: Subject<void> = new Subject<void>();

  buySupply: boolean = false;

  @ViewChild('buySupplyDetail', { static: false })
  buySupplyDetail: BuySupplyModalComponent | undefined;

  constructor(
    public store: AppStoreService,
    private modalService: ModalService,
    public swa: SwaService,
    private router: Router
  ) {
    this.state$ = this.store.getState();
  }

  ngOnInit(): void {
    if (!this.store.validateCurrentDisease()) {
      this.router.navigate(['/search']);
    }
  }

  openBuyDetails() {
    this.buySupply = true;
    this.store
      .currentProductToShopping()
      .subscribe((shoppingProduct) => this.openModal('buySupplyDetail'));
  }

  addShoppingCart($event: any[]) {
    // let orders: ShoppingCart[] = [];
    // $event.map((item) => {
    //   let order: ShoppingCart = {
    //     id: 0,
    //     userId: 0,
    //     productId: item.productId,
    //     dosis: item.dosis,
    //     supplying: item.supplying,
    //   } as ShoppingCart;
    //   orders.push(order);
    // });
    // this.store
    //   .addCarts({} as ShoppingCart)
    //   .pipe(takeUntil(this.ngUnsubscribe))
    //   .subscribe(
    //     observer(this.swa, () => {
    //       this.closeBuySupplyDeail();
    //       this.swa.confirm(
    //         '¿Desea ver el carrito de compra?',
    //         'Seleccione cancelar para seguir comprando',
    //         (confirm) => {
    //           if (confirm.value) {
    //             this.router.navigate(['/shopping-cart']);
    //           }
    //         }
    //       );
    //     })
    //   );
  }
  closeBuySupplyDeail() {
    this.buySupply = false;
    this.closeModal('buySupplyDetail');
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  onAddCart() {
    // this.store
    //   .generateOrdersbyDesease()
    //   .pipe(takeUntil(this.ngUnsubscribe))
    //   .subscribe(
    //     observer(this.swa, () => {
    //       this.swa.confirm(
    //         '¿Desea ver el carrito de compra?',
    //         'Seleccione cancelar para seguir comprando',
    //         (confirm) => {
    //           if (confirm.value) {
    //             this.router.navigate(['/shopping-cart']);
    //           }
    //         }
    //       );
    //     })
    //   );
  }

  viewDetails(product: Product) {
    this.swa.loading();
    this.store
      .selectCurrentProduct(product.id)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        observer(this.swa, () => {
          this.buySupply = true;
          this.openBuyDetails();
          this.swa.close();
        })
      );
  }
}
