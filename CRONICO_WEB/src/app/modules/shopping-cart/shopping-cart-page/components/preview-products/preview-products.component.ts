import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCart } from '@core/interfaces/order.interface';

@Component({
  selector: 'app-preview-products',
  templateUrl: './preview-products.component.html',
  styleUrls: ['./preview-products.component.scss'],
})
export class PreviewProductsComponent implements OnInit {
  @Input() products: ShoppingCart[] = [];
  constructor() {}

  ngOnInit(): void {}
}
