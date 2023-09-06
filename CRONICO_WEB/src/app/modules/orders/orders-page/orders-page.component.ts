import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { observer } from '@core/functions/observer.function';
import { Subscription } from '@core/interfaces/subscription.interface';
import { AppStoreService } from '@core/store/app-store.service';
import { AppState } from '@core/store/app-store.state';
import { dateToRead } from '@core/utils/date.parse';
import { SwaService } from '@services/swa/swa.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss'],
})
export class OrdersPageComponent implements OnInit {
  state$: Observable<AppState> = new Subject<AppState>();
  protected ngUnsubscribe: Subject<void> = new Subject<void>();
  constructor(
    private store: AppStoreService,
    private swa: SwaService,
    private router: Router
  ) {
    this.state$ = this.store.getState();
  }

  ngOnInit(): void {
    this.swa.loading();
    this.store
      .loadShopping()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(observer(this.swa));
  }
}
