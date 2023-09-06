import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppStoreService } from '@core/store/app-store.service';
import { AppState } from '@core/store/app-store.state';
import { ModalService } from '@services/modal/modal.service';
import { SwaService } from '@services/swa/swa.service';
import { Observable, Subject } from 'rxjs';
import { BuySupplyModalComponent } from '../modals/buy-supply-modal/buy-supply-modal.component';
import { Product } from '@core/interfaces/product.interface';
import { observer } from '@core/functions/observer.function';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-search-details-ailment',
  templateUrl: './search-details-ailment.component.html',
  styleUrls: ['./search-details-ailment.component.scss'],
})
export class SearchDetailsAilmentComponent implements OnInit {
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
    if (!this.store.validateCurrentAilment()) {
      this.router.navigate(['/search']);
    }
  }

  openBuyDetails() {
    this.buySupply = true;
    this.store
      .currentProductToShopping()
      .subscribe((shoppingProduct) => this.openModal('buySupplyDetail'));
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

  onAddCart() {}

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
