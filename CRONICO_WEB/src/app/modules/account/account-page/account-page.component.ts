import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { observer } from '@core/functions/observer.function';
import { Card } from '@core/interfaces/cards.interface';
import { CreateCard } from '@core/interfaces/create-card.interface';
import { ApiDataResponse } from '@core/interfaces/http.interfaces';
import { User } from '@core/interfaces/user';
import { AppStoreService } from '@core/store/app-store.service';
import { AppState } from '@core/store/app-store.state';
import { OpenPayService } from '@services/open-pay/open-pay.service';
import { SessionService } from '@services/session/session.service';
import { SwaService } from '@services/swa/swa.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss'],
})
export class AccountPageComponent implements OnInit {
  state$: Observable<AppState> = new Subject<AppState>();
  protected ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    public store: AppStoreService,
    public swa: SwaService,
    private router: Router,
    private session: SessionService,
    private openPayService: OpenPayService
  ) {
    this.state$ = this.store.getState();
  }

  ngOnInit(): void {
    this.swa.loading();
    this.store
      .loadAccountPage()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(observer(this.swa));
  }

  onCloseSession(data: any) {
    this.session.logout();
    this.router.navigate(['/auth/login']);
  }

  showEditUserForm() {
    this.store.showEditUserForm(true);
  }

  closeEditUSerForm() {
    this.store.showEditUserForm(false);
  }

  editUser($event: User) {
    this.swa.confirm('¿ Desea guardar los cambios?', '', (result) => {
      if (result.value) {
        this.store
          .updateUser($event)
          .pipe(takeUntil(this.ngUnsubscribe))
          .subscribe(
            observer(this.swa, () => {
              this.swa.success('Cambios guardados correctamente');
              this.closeEditUSerForm();
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

  changeCard(item: Card) {
    this.swa.loading();
    this.store
      .setDefaultCard(item)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(observer(this.swa));
  }
}
