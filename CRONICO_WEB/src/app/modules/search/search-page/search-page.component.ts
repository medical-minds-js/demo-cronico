import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { observer } from '@core/functions/observer.function';
import { Ailment } from '@core/interfaces/ailment.interface';
import { AilmentProduct, Product } from '@core/interfaces/product.interface';
import { AppStoreService } from '@core/store/app-store.service';
import { AppState } from '@core/store/app-store.state';
import { SwaService } from '@services/swa/swa.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit, OnDestroy {
  state$: Observable<AppState> = new Subject<AppState>();
  protected ngUnsubscribe: Subject<void> = new Subject<void>();
  readonly form: FormGroup = new FormGroup({});
  private inputSearch: FormControl = new FormControl();

  constructor(
    public store: AppStoreService,
    public swa: SwaService,
    private router: Router
  ) {
    this.state$ = this.store.getState();
  }

  ngOnInit(): void {
    this.initForm();
    this.swa.loading();
    this.store
      .loadProducts()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(observer(this.swa));
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  initForm() {
    this.inputSearch = new FormControl(null, [Validators.required]);
    this.loadControls();
  }

  loadControls() {
    Object.keys(this.form.controls).forEach((control) => {
      this.form.removeControl(control);
    });
    this.form.addControl('inputSearch', this.inputSearch);
  }

  doSearch() {
    let filter: string = this.form.get('inputSearch')?.value;
    if (!filter) {
      return;
    }
    this.swa.loading();
    this.store
      .updateProductFilters(filter)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(observer(this.swa));
  }

  doClean() {
    this.swa.loading();
    this.form.get('inputSearch')?.setValue(null);
    this.store
      .updateProductFilters()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(observer(this.swa));
  }

  changePage($event: any) {
    this.swa.loading();
    this.store
      .updatePageNumber($event)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(observer(this.swa));
  }
  viewDetails(product: Product) {
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

  viewAilmentDetails(ailment: Ailment) {
    this.swa.loading();
    this.store
      .selectCurrentAilment(ailment)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        observer(this.swa, () => {
          this.swa.close();
          this.router.navigateByUrl('/search/ailment');
        })
      );
  }
}
