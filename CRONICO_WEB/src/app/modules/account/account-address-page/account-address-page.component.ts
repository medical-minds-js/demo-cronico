import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { observer } from '@core/functions/observer.function';
import { Address } from '@core/interfaces/address.interface';
import { DeliveryTime } from '@core/interfaces/deliveries-times-interface';
import { AppStoreService } from '@core/store/app-store.service';
import { AppState } from '@core/store/app-store.state';
import { SessionService } from '@services/session/session.service';
import { SwaService } from '@services/swa/swa.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-account-address-page',
  templateUrl: './account-address-page.component.html',
  styleUrls: ['./account-address-page.component.scss'],
})
export class AccountAddressPageComponent implements OnInit {
  state$: Observable<AppState> = new Subject<AppState>();
  protected ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    public store: AppStoreService,
    public swa: SwaService,
    private router: Router,
    private session: SessionService
  ) {
    this.state$ = this.store.getState();
  }

  ngOnInit(): void {
    this.swa.loading();
    this.store
      .loadAccountAddressPage()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(observer(this.swa));
  }

  showFormCreateAddress() {
    this.store.showAddAddressForm();
  }

  closeFormAddAddress() {
    this.store.closeFormAddAddress();
  }

  showAddressEditForm(item: Address) {
    this.store.showAddressEditForm(item);
  }

  closeAddressEditForm() {
    this.store.closeAddressEditForm();
  }

  showEditDeliveryForm(item: Address) {
    this.store.showEditDeliveryForm(item);
  }

  closeFormDelivery() {
    this.store.closeEditDeliveryForm();
  }

  deleteAddress(item: Address) {
    this.swa.confirm('¿Desea eliminar la dirección?', '', (result) => {
      if (result.value) {
        this.swa.loading();
        this.store
          .deleteAddress(item.id)
          .pipe(takeUntil(this.ngUnsubscribe))
          .subscribe(
            observer(this.swa, () => {
              this.swa.close();
              this.swa.success('Dirección eliminada');
            })
          );
      }
    });
  }

  createAddress(event$: Address) {
    this.swa.confirm('¿Desea agregar esta dirección?', '', (result) => {
      if (result.value) {
        this.swa.loading();
        this.store
          .saveAddress(event$)
          .pipe(takeUntil(this.ngUnsubscribe))
          .subscribe(
            observer(this.swa, () => {
              this.swa.close();
              this.closeFormAddAddress();
              this.swa.success('Dirección agregada');
            })
          );
      }
    });
  }

  editAddress(data: Address) {
    this.swa.confirm('¿Desea guardarlos cambios?', '', (result) => {
      if (result.value) {
        this.swa.loading();
        this.store
          .editAddress(data)
          .pipe(takeUntil(this.ngUnsubscribe))
          .subscribe(
            observer(this.swa, () => {
              this.swa.close();
              this.closeAddressEditForm();
              this.swa.success('Dirección actualizada');
            })
          );
      }
    });
  }

  editDelivery(deliveries: DeliveryTime[]) {
    this.swa.confirm('¿Desea guardar los cambios?', '', (result) => {
      if (result.value) {
        this.swa.loading();
        this.store
          .editDelivery(deliveries)
          .pipe(takeUntil(this.ngUnsubscribe))
          .subscribe(
            observer(this.swa, () => {
              this.swa.close();
              this.closeFormDelivery();
              this.swa.success('Horario actualizado');
            })
          );
      }
    });
  }

  getPostalCode(code: number) {
    this.swa.loading();
    this.store
      .loadPostalCodes(code)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(observer(this.swa));
  }

  predeterminateAddress(item: Address) {
    item.status = 1;
    this.swa.loading();
    this.store
      .editAddress(item)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        observer(this.swa, () => {
          this.swa.close();
          this.swa.success('Dirección actualizada');
        })
      );
  }
}
