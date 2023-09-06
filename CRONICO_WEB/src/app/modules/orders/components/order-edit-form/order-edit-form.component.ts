import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from '@core/interfaces/subscription.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { AppState } from '@core/store/app-store.state';
import { AppStoreService } from '@core/store/app-store.service';

@Component({
  selector: 'app-order-edit-form',
  templateUrl: './order-edit-form.component.html',
  styleUrls: ['./order-edit-form.component.scss'],
})
export class OrderEditFormComponent implements OnInit {
  state$: Observable<AppState> = new Subject<AppState>();
  protected ngUnsubscribe: Subject<void> = new Subject<void>();

  @Input() subscription: Subscription = {} as Subscription;
  @Input() showQuantity: boolean = false;
  @Input() showDelivery: boolean = false;

  @Output() updateDateDelivery = new EventEmitter();
  @Output() updateQuantities = new EventEmitter();

  readonly form: FormGroup = new FormGroup({});
  submited: boolean = false;
  inputDelivery: FormControl = new FormControl();
  minDate: Date = new Date();
  maxDate: Date = new Date();
  isCorrectDate: boolean = false;
  constructor(public store: AppStoreService) {}

  ngOnInit(): void {
    if (this.showDelivery) {
      this.initForm();
    }
  }

  initForm() {
    this.inputDelivery = new FormControl(
      { value: this.subscription.nextDelivery, disabled: false },
      [Validators.required]
    );
    let currentDay: number = new Date(this.subscription.createdAt).getDate();

    this.minDate.setDate(currentDay - 2);
    this.maxDate.setDate(currentDay + 2);
    this.addControls();
  }

  addControls() {
    Object.keys(this.form.controls).forEach((control) => {
      this.form.removeControl(control);
    });
    this.form.addControl('inputDelivery', this.inputDelivery);
  }

  addDose() {
    this.store.addDoseSubscription();
  }

  resDose() {
    this.store.resSubscription();
  }

  addPieces() {
    this.store.addPiecesSubscription();
  }

  resPieces() {
    this.store.resPiecesSubscription();
  }

  changeNextDate() {
    let formDate: Date = new Date(this.subscription.createdAt);
    let nextDate: Date = new Date(
      this.form.get('inputDelivery')?.value + ' 00:00:00'
    );
    formDate.setMonth(nextDate.getMonth());
    if (
      (nextDate.getDate() < this.minDate.getDate() &&
        formDate.getDate() > this.minDate.getDate()) ||
      (nextDate.getDate() > this.maxDate.getDate() &&
        formDate.getDate() < this.maxDate.getDate())
    ) {
      this.isCorrectDate = false;
    } else {
      this.isCorrectDate = true;
    }
  }

  updateQuantity() {
    this.updateQuantities.emit(this.subscription.subscriptionStatusId);
  }

  updateDelivery() {
    const data = {
      isCorrectDate: this.isCorrectDate,
      subscriptionStatusId: this.subscription.subscriptionStatusId,
      newDeliveryDate: this.form.get('inputDelivery')?.value,
    };
    this.updateDateDelivery.emit(data);
  }
}
