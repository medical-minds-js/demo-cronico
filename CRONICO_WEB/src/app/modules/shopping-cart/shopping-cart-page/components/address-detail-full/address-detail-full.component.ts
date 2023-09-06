import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Address } from '@core/interfaces/address.interface';
import { DeliveryTime } from '@core/interfaces/deliveries-times-interface';

@Component({
  selector: 'app-address-detail-full',
  templateUrl: './address-detail-full.component.html',
  styleUrls: ['./address-detail-full.component.scss'],
})
export class AddressDetailFullComponent implements OnInit {
  @Input() address: Address = {} as Address;
  @Input() showDeliveryForm: boolean = false;
  @Input() deliveriesTimes: DeliveryTime[] = [];
  @Input() showDeleteButton: boolean = false;
  @Output() requestShowEditForm = new EventEmitter<Address>();
  @Output() addressSelected = new EventEmitter<Address>();
  @Output() submitDeliveryForm = new EventEmitter();
  @Output() deleteAddress = new EventEmitter();
  @Output() closeDeliveryForm = new EventEmitter<boolean>();
  @Output() requestShowDeliveryForm = new EventEmitter<Address>();

  constructor() {}

  ngOnInit(): void {}

  showEditAddress(data: Address) {
    this.requestShowEditForm.emit(data);
  }

  predeterminateAddress(data: Address) {
    this.addressSelected.emit(data);
  }

  onShowDeliveryForm(data: Address) {
    this.requestShowDeliveryForm.emit(data);
  }

  onSubmitFormDelivery(data: any) {
    this.submitDeliveryForm.emit(data);
  }
  onCloseFormDelivery() {
    this.closeDeliveryForm.emit(false);
  }

  onDeleteAddress(data: Address) {
    this.deleteAddress.emit(data);
  }
}
