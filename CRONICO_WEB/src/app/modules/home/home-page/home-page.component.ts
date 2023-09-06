import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SwaService } from '@services/swa/swa.service';
import { AppStoreService } from '@core/store/app-store.service';
import { Observable, Subject, from } from 'rxjs';
import { AppState } from '@core/store/app-store.state';
import { takeUntil } from 'rxjs/operators';
import { observer } from '@core/functions/observer.function';
import { Product } from '@core/interfaces/product.interface';
import { Router } from '@angular/router';
import { SupplyRequest } from '@core/interfaces/supply-request.interface';
import { RequestFormComponent } from '../components/request-form/request-form.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  state$: Observable<AppState> = new Subject<AppState>();
  protected ngUnsubscribe: Subject<void> = new Subject<void>();

  @ViewChild('requestForm', { static: false })
  domRequestForm!: RequestFormComponent;

  constructor(
    public store: AppStoreService,
    public swa: SwaService,
    private router: Router
  ) {
    this.state$ = this.store.getState();
  }

  ngOnInit(): void {
    this.swa.loading();
    this.store
      .loadHome()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(observer(this.swa));
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  viewDetailsProduct(product: Product) {
    this.swa.loading();
    this.store
      .selectCurrentProduct(product.id)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        observer(this.swa, () => {
          this.swa.close();
          if (product.productType == 2) {
            this.router.navigateByUrl('/search/disease');
          } else {
            this.router.navigateByUrl('/search/supply');
          }
        })
      );
  }

  viewMainProduct() {
    let product: Product = this.store.getMainProduct();
    this.viewDetailsProduct(product);
  }

  submitRequestForm(data: SupplyRequest) {
    this.swa.loading();
    this.store
      .requestNewProduct(data)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        observer(this.swa, () => {
          this.swa.success('Solicitud enviada, gracias');
          this.domRequestForm.resetForm();
        })
      );
  }
}
