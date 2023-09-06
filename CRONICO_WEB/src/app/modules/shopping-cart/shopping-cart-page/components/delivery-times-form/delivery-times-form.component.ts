import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DeliveryTime } from '@core/interfaces/deliveries-times-interface';

@Component({
  selector: 'app-delivery-times-form',
  templateUrl: './delivery-times-form.component.html',
  styleUrls: ['./delivery-times-form.component.scss'],
})
export class DeliveryTimesFormComponent implements OnInit {
  @Input() deliveries: DeliveryTime[] = [];
  @Input() deliveryTimes: DeliveryTime[] = [];
  @Output() submitForm = new EventEmitter();
  @Output() closeForm = new EventEmitter();

  readonly form: FormGroup = new FormGroup({});
  private inputDelivery: FormControl = new FormControl();

  ids: number[] = [];
  constructor() {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.inputDelivery = new FormControl(null, [Validators.required]);
    this.addControlls();
  }

  addControlls() {
    Object.keys(this.form.controls).forEach((control) => {
      this.form.removeControl(control);
    });
    this.form.addControl('inputDelivery', this.inputDelivery);
    this.ids = this.deliveries.map((i) => i.id);
  }

  validateChecked(deliveryTime: DeliveryTime) {
    return this.ids.includes(deliveryTime.id);
  }

  changeDelivery(data: any) {
    const { value, checked } = data.target;
    if (checked && this.ids.indexOf(value) === -1) {
      this.ids.push(Number(value));
    } else {
      this.ids = this.ids.filter((id) => id !== Number(value));
    }
  }

  updateDelivery() {
    const output: DeliveryTime[] = this.ids.map(
      (id) => ({ id, active: 1 } as DeliveryTime)
    );
    this.submitForm.emit(output);
  }

  close() {
    this.closeForm.emit(false);
  }
}
