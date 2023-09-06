import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Address } from '@core/interfaces/address.interface';

@Component({
  selector: 'app-credit-card-form',
  templateUrl: './credit-card-form.component.html',
  styleUrls: ['./credit-card-form.component.scss'],
})
export class CreditCardFormComponent implements OnInit {
  @Input() address: Address = {} as Address;
  @Output() submitForm = new EventEmitter();
  @Output() closeForm = new EventEmitter();
  submited: boolean = false;
  checked: boolean = false;
  readonly form: FormGroup = new FormGroup({});
  inputHolder: FormControl = new FormControl();
  inputNumber: FormControl = new FormControl();
  inputExpirationMonth: FormControl = new FormControl();
  inputExpirationYear: FormControl = new FormControl();
  inputCvv: FormControl = new FormControl();

  constructor() {}

  ngOnDestroy(): void {
    this.submited = false;
    this.form.reset();
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.inputHolder = new FormControl(null, [
      Validators.required,
      Validators.maxLength(80),
    ]);
    this.inputNumber = new FormControl(null, [Validators.required]);
    this.inputExpirationMonth = new FormControl(null, [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(2),
      //Validators.pattern('^(0[1-9]|1[0-2])$'),
    ]);
    this.inputExpirationYear = new FormControl(null, [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(2),
      //Validators.pattern('^(0[2]|1[0-9])$'),
      Validators.min(new Date().getFullYear() - 2000),
    ]);
    this.inputCvv = new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
      //Validators.pattern('^[0-9]{3, 4}$'),
    ]);
    Object.keys(this.form.controls).forEach((control) => {
      this.form.removeControl(control);
    });
    this.form.addControl('inputHolder', this.inputHolder);
    this.form.addControl('inputNumber', this.inputNumber);
    this.form.addControl('inputExpirationMonth', this.inputExpirationMonth);
    this.form.addControl('inputExpirationYear', this.inputExpirationYear);
    this.form.addControl('inputCvv', this.inputCvv);
  }

  async onSubmit(data: any) {
    if (this.form.valid) {
      const cardData = {
        holder_name: this.form.get('inputHolder')?.value,
        card_number: this.form.get('inputNumber')?.value,
        expiration_year: this.form.get('inputExpirationYear')?.value,
        expiration_month: this.form
          .get('inputExpirationMonth')
          ?.value.toString()
          .padStart(2, '0'),
        cvv2: this.form.get('inputCvv')?.value,
      };
      this.submitForm.emit(cardData);
    }
  }

  onClose() {
    this.closeForm.emit(false);
  }
}
