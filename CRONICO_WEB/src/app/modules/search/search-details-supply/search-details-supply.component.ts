import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';

import { BuySupplyModalComponent } from '../modals/buy-supply-modal/buy-supply-modal.component';
import { ModalService } from 'src/app/services/modal/modal.service';
import { Observable, Subject } from 'rxjs';
import { AppState } from '@core/store/app-store.state';
import { AppStoreService } from '@core/store/app-store.service';
import { SwaService } from '@services/swa/swa.service';
import { ShoppingCart } from '@core/interfaces/order.interface';
import { observer } from '@core/functions/observer.function';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ShoppingProduct } from '@core/interfaces/shopping-product.interface';
import { SessionService } from '@services/session/session.service';

@Component({
  selector: 'app-search-details-supply',
  templateUrl: './search-details-supply.component.html',
  styleUrls: ['./search-details-supply.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchDetailsSupplyComponent implements OnInit {
  state$: Observable<AppState> = new Subject<AppState>();
  protected ngUnsubscribe: Subject<void> = new Subject<void>();

  buySupply: boolean = false;

  @ViewChild('buySupplyDetail', { static: false })
  buySupplyDetail: BuySupplyModalComponent | undefined;

  constructor(
    public store: AppStoreService,
    private modalService: ModalService,
    public session: SessionService,
    public swa: SwaService,
    private router: Router,
    private ref: ChangeDetectorRef
  ) {
    this.state$ = this.store.getState();
  }

  ngOnInit(): void {
    if (!this.store.validateCurrentProduct()) {
      this.router.navigate(['/search']);
    }
  }

  openBuyDetails() {
    this.store
      .currentProductToShopping()
      .subscribe((shoppingProduct) => this.openModal('buySupplyDetail'));
  }

  updateShoppingProduct(data: ShoppingProduct) {
    this.store
      .updateShoppingProduct(data)
      .subscribe(() => this.ref.detectChanges());
  }

  addShoppingCart(data: ShoppingProduct) {
    this.swa.loading();
    this.store
      .addCarts(data)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        observer(this.swa, () => {
          this.closeBuySupplyDeail();
          this.swa.confirm(
            '¿Desea ver el carrito de compra?',
            'Seleccione cancelar para seguir comprando',
            (confirm) => {
              if (confirm.value) {
                this.router.navigate(['/shopping-cart']);
              }
            }
          );
        })
      );
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
}
