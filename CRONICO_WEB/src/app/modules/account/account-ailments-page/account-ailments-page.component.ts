import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { dataValue } from '@core/functions/api-value.function';
import { observer } from '@core/functions/observer.function';
import { ApiDataResponse } from '@core/interfaces/http.interfaces';
import { UserAilments } from '@core/interfaces/user-ailments';
import { AppStoreService } from '@core/store/app-store.service';
import { AppState } from '@core/store/app-store.state';
import { SwaService } from '@services/swa/swa.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-account-ailments-page',
  templateUrl: './account-ailments-page.component.html',
  styleUrls: ['./account-ailments-page.component.scss'],
})
export class AccountAilmentsPageComponent implements OnInit {
  state$: Observable<AppState> = new Subject<AppState>();
  protected ngUnsubscribe: Subject<void> = new Subject<void>();

  readonly form: FormGroup = new FormGroup({});

  constructor(
    public store: AppStoreService,
    public swa: SwaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.state$ = this.store.getState();
    this.swa.loading();
    this.store
      .loadUserAilmentsPage()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(observer(this.swa));
  }

  initForm() {
    Object.keys(this.form.controls).forEach((control) => {
      this.form.removeControl(control);
    });
    this.form.addControl(
      'inputSearch',
      new FormControl(null, [Validators.required])
    );
  }

  viewAilmentDetails(id: number) {
    this.router.navigate(['/account/ailments/' + id]);
  }

  doClean() {
    this.swa.loading();
    this.store
      .searchAilments()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(observer(this.swa));
  }

  doSearch() {
    const value = this.form.get('inputSearch')?.value;
    this.swa.loading();
    this.store
      .searchAilments(value)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(observer(this.swa));
  }

  addAilmentToUser(id: number) {
    const value = this.form.get('inputSearch')?.value;
    this.swa.loading();
    this.store
      .addAilments(id, value)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        observer(this.swa, (response: ApiDataResponse<UserAilments>) => {
          this.swa.close();
          this.viewAilmentDetails(dataValue(response).id);
        })
      );
  }
}
