import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { observer } from '@core/functions/observer.function';
import { AppStoreService } from '@core/store/app-store.service';
import { AppState } from '@core/store/app-store.state';
import { dateToRead } from '@core/utils/date.parse';
import { SwaService } from '@services/swa/swa.service';
import { Observable, Subject } from 'rxjs';
import { OrderEditFormComponent } from '../components/order-edit-form/order-edit-form.component';
import { ModalService } from '@services/modal/modal.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-orders-detail',
  templateUrl: './orders-detail.component.html',
  styleUrls: ['./orders-detail.component.scss'],
})
export class OrdersDetailComponent implements OnInit {
  state$: Observable<AppState> = new Subject<AppState>();
  protected ngUnsubscribe: Subject<void> = new Subject<void>();

  @ViewChild('editSubDetail', { static: false })
  buySupplyDetail: OrderEditFormComponent | undefined;
  showQuantity: boolean = false;
  showDelivery: boolean = false;
  constructor(
    private route: ActivatedRoute,
    public store: AppStoreService,
    public swa: SwaService
  ) {
    this.state$ = this.store.getState();
  }

  ngOnInit(): void {
    this.swa.loading();
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.store
        .loadCurrentShopping(Number(id))
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(observer(this.swa));
    });
  }

  showEditForm() {
    this.showQuantity = true;
  }

  closeEditForm() {
    this.showQuantity = false;
  }

  showEditDeliveryForm() {
    this.showDelivery = true;
  }

  closeEditDeliveryForm() {
    this.showDelivery = false;
  }

  updateDateDelivery(event: any) {
    if (event.isCorrectDate) {
      let message: string =
        event.subscriptionStatusId == 3
          ? 'Estos cambios aplicaran en la siguiente compra'
          : '';
      this.swa.confirm(
        '¿Desea actualizar las cantidades de la suscripción?',
        message,
        (result) => {
          if (result.value) {
            this.swa.loading();
            this.store.changeDeliveryDate(
              event.isCorrectDate,
              event.newDeliveryDate
            );
            this.store
              .updateSubscriptionDelivery()
              .pipe(takeUntil(this.ngUnsubscribe))
              .subscribe(
                observer(this.swa, () => {
                  this.swa.close();
                  this.closeEditDeliveryForm();
                })
              );
          }
        }
      );
    } else {
      this.swa.info(
        'La nueva fecha de entrega solo puede ser 2 días antes o despues de la fecha actual'
      );
    }
  }

  updateQuantities(event: any) {
    let message: string =
      event == 3 ? 'Estos cambios aplicaran en la siguiente compra' : '';
    this.swa.confirm(
      '¿Desea actualizar las cantidades de la suscripción?',
      message,
      (result) => {
        if (result.value) {
          this.swa.loading();
          this.store
            .updateSubscriptionQuantities()
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe(
              observer(this.swa, () => {
                this.swa.close();
                this.closeEditForm();
              })
            );
        }
      }
    );
  }
}
