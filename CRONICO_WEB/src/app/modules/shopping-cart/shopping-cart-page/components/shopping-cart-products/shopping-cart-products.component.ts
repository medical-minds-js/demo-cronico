import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShoppingCart } from '@core/interfaces/order.interface';

@Component({
  selector: 'app-shopping-cart-products',
  templateUrl: './shopping-cart-products.component.html',
  styleUrls: ['./shopping-cart-products.component.scss'],
})
export class ShoppingCartProductsComponent implements OnInit {
  @Input() items: ShoppingCart[] = [];
  @Output() showEditItemShoppingCart = new EventEmitter<ShoppingCart>();
  @Output() closeEditItemShoppingCart = new EventEmitter<boolean>();
  @Output() deleteItemShoppingCart = new EventEmitter<ShoppingCart>();
  @Output() resDoseItemShoppingCart = new EventEmitter<ShoppingCart>();
  @Output() addDoseItemShoppingCart = new EventEmitter<ShoppingCart>();
  @Output() resPiecesItemShoppingCart = new EventEmitter<ShoppingCart>();
  @Output() addPiecesItemShoppingCart = new EventEmitter<ShoppingCart>();

  constructor() {}

  ngOnInit(): void {}

  onShowForm(item: ShoppingCart) {
    this.showEditItemShoppingCart.emit(item);
  }

  onCloseEdit() {
    this.closeEditItemShoppingCart.emit(true);
  }

  onDeleteShoppingCart(item: ShoppingCart) {
    this.deleteItemShoppingCart.emit(item);
  }

  onResDose(item: ShoppingCart) {
    this.resDoseItemShoppingCart.emit(item);
  }
  onAddDose(item: ShoppingCart) {
    this.addDoseItemShoppingCart.emit(item);
  }
  onResPieces(item: ShoppingCart) {
    this.resPiecesItemShoppingCart.emit(item);
  }
  onAddPieces(item: ShoppingCart) {
    this.addPiecesItemShoppingCart.emit(item);
  }
}
