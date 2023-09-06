import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Address } from '@core/interfaces/address.interface';

@Component({
  selector: 'app-address-detail',
  templateUrl: './address-detail.component.html',
  styleUrls: ['./address-detail.component.scss'],
})
export class AddressDetailComponent implements OnInit {
  @Input() address: Address = {} as Address;
  @Output() addressSelected = new EventEmitter<Address>();

  constructor() {}

  ngOnInit(): void {}

  predeterminateAddress(data: Address) {
    this.addressSelected.emit(data);
  }
}
