import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '@core/interfaces/product.interface';
import { ShoppingProduct } from '@core/interfaces/shopping-product.interface';

@Component({
  selector: 'app-buy-supply-modal',
  templateUrl: './buy-supply-modal.component.html',
  styleUrls: ['./buy-supply-modal.component.scss'],
})
export class BuySupplyModalComponent implements OnInit, OnChanges {
  @Input() shoppingProduct: ShoppingProduct = {} as ShoppingProduct;
  @Input() disease: Product = {} as Product;
  @Output() submitForm = new EventEmitter();
  @Output() closeForm = new EventEmitter();
  @Output() updateShoppingProduct = new EventEmitter();

  readonly form: FormGroup = new FormGroup({});
  private inputDose: FormControl = new FormControl();
  private inputPieces: FormControl = new FormControl();
  private inputPeriod: FormControl = new FormControl();
  constructor() {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges() {
    this.initForm();
  }

  initForm() {
    this.inputDose = new FormControl(this.shoppingProduct.dose, [
      Validators.required,
    ]);
    this.inputPieces = new FormControl(this.shoppingProduct.pieces, [
      Validators.required,
    ]);
    this.inputPeriod = new FormControl(this.shoppingProduct.period, [
      Validators.required,
    ]);
    this.addControlls();
  }

  addControlls() {
    Object.keys(this.form.controls).forEach((control) => {
      this.form.removeControl(control);
    });
    this.form.addControl('inputDose', this.inputDose);
    this.form.addControl('inputPieces', this.inputPieces);
    this.form.addControl('inputPeriod', this.inputPeriod);
  }

  addDose() {
    this.updateShoppingProduct.emit({
      ...this.shoppingProduct,
      dose: this.shoppingProduct.dose + 0.5,
    });
  }

  resDose() {
    if (this.shoppingProduct.dose > 0.5) {
      this.updateShoppingProduct.emit({
        ...this.shoppingProduct,
        dose: this.shoppingProduct.dose - 0.5,
      });
    }
  }

  addPiece() {
    this.updateShoppingProduct.emit({
      ...this.shoppingProduct,
      pieces: this.shoppingProduct.pieces + 1,
    });
  }

  resPiece() {
    if (this.shoppingProduct.pieces > 1) {
      this.updateShoppingProduct.emit({
        ...this.shoppingProduct,
        pieces: this.shoppingProduct.pieces - 1,
      });
    }
  }

  getBoxSuggestion() {
    return Math.ceil(
      this.shoppingProduct.dose / this.shoppingProduct.product.presentation
    );
  }

  changePeriod(period: number) {
    this.updateShoppingProduct.emit({
      ...this.shoppingProduct,
      period: String(period),
    });
  }

  onAddCart() {
    this.submitForm.emit(this.shoppingProduct);
  }
}
