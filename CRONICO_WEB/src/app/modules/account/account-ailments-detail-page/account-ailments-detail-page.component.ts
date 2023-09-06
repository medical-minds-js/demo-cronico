import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { observer } from '@core/functions/observer.function';
import { UserAilmentsProduct } from '@core/interfaces/user-ailments';
import { AppStoreService } from '@core/store/app-store.service';
import { AppState } from '@core/store/app-store.state';
import { SwaService } from '@services/swa/swa.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-account-ailments-detail-page',
  templateUrl: './account-ailments-detail-page.component.html',
  styleUrls: ['./account-ailments-detail-page.component.scss'],
})
export class AccountAilmentsDetailPageComponent implements OnInit {
  state$: Observable<AppState> = new Subject<AppState>();
  protected ngUnsubscribe: Subject<void> = new Subject<void>();

  readonly form: FormGroup = new FormGroup({});

  constructor(
    private route: ActivatedRoute,
    public store: AppStoreService,
    public swa: SwaService
  ) {}

  ngOnInit(): void {
    this.state$ = this.store.getState();
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.initPage(Number(id));
    });
  }

  initPage(id: number) {
    this.swa.loading();
    this.store
      .loadUserAilmentsDetailPage(id)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(observer(this.swa));
  }

  onSubmitSetupTakeDose(data: UserAilmentsProduct) {
    this.swa.loading();
    this.store
      .editUserAilmentsProduct(data)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(observer(this.swa));
  }

  onCloseEditing(data: UserAilmentsProduct) {
    this.store.closeEditUserAilmentsProduct(data);
  }

  onSubmitTakeDose(data: UserAilmentsProduct) {
    this.store
      .submitTakeDose(data)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(observer(this.swa));
  }
}
