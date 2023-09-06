import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  OnDestroy,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Address } from '@core/interfaces/address.interface';
import { PostalCode } from '@core/interfaces/postal-codes.interface';
import { SwaService } from '@services/swa/swa.service';

@Component({
  selector: 'app-address-edit-form',
  templateUrl: './address-edit-form.component.html',
  styleUrls: ['./address-edit-form.component.scss'],
})
export class AddressEditFormComponent implements OnInit, OnDestroy, OnChanges {
  @Input() address: Address = {} as Address;
  @Input() postalCodes: PostalCode[] = [];
  @Output() submitForm = new EventEmitter();
  @Output() submitPostalCode = new EventEmitter();
  @Output() closeForm = new EventEmitter();
  submited: boolean = false;
  checked: boolean = false;
  readonly form: FormGroup = new FormGroup({});
  private inputName: FormControl = new FormControl();
  private inputStreet: FormControl = new FormControl();
  private inputStreetNumber: FormControl = new FormControl();
  private inputInteriorNumber: FormControl = new FormControl();
  private inputSuburb: FormControl = new FormControl();
  private inputCp: FormControl = new FormControl();
  private inputLocation: FormControl = new FormControl();
  private inputComments: FormControl = new FormControl();
  private inputState: FormControl = new FormControl();
  private inputReference: FormControl = new FormControl();
  private inputStatus: FormControl = new FormControl();

  constructor() {}

  ngOnDestroy(): void {
    this.submited = false;
    this.form.reset();
  }

  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.postalCodes) {
      let codes: PostalCode[] = changes.postalCodes.currentValue;
      if (codes.length == 0) {
        this.form.get('inputCp')?.setErrors({
          found: true,
        });
      } else {
        this.selectPostalCode(this.postalCodes[0]);
      }
    }
  }

  initForm() {
    this.checked = this.address.status == 1 ? true : false;
    this.inputName = new FormControl(this.address.name, [
      Validators.required,
      Validators.maxLength(255),
    ]);
    this.inputStreet = new FormControl(this.address.street, [
      Validators.required,
      Validators.maxLength(255),
    ]);
    this.inputStreetNumber = new FormControl(this.address.streetNumber, [
      Validators.required,
      Validators.maxLength(50),
    ]);
    this.inputInteriorNumber = new FormControl(this.address.streetNumber, [
      Validators.maxLength(50),
    ]);

    this.inputCp = new FormControl(
      this.address.cp != undefined ? this.address.cp : null,
      [Validators.required, Validators.maxLength(11)]
    );
    this.inputSuburb = new FormControl(this.address.suburb, [
      Validators.required,
      Validators.maxLength(255),
    ]);
    this.inputLocation = new FormControl(this.address.location, [
      Validators.required,
      Validators.maxLength(255),
    ]);
    this.inputState = new FormControl(this.address.state, [
      Validators.required,
      Validators.maxLength(255),
    ]);
    this.inputReference = new FormControl(this.address.reference, [
      Validators.maxLength(255),
    ]);
    this.inputComments = new FormControl(this.address.comments, [
      Validators.maxLength(255),
    ]);
    this.inputStatus = new FormControl(this.checked, []);
    this.addControlls();
  }

  addControlls() {
    Object.keys(this.form.controls).forEach((control) => {
      this.form.removeControl(control);
    });
    this.form.addControl('inputName', this.inputName);
    this.form.addControl('inputStreet', this.inputStreet);
    this.form.addControl('inputStreetNumber', this.inputStreetNumber);
    this.form.addControl('inputInteriorNumber', this.inputInteriorNumber);
    this.form.addControl('inputSuburb', this.inputSuburb);
    this.form.addControl('inputCp', this.inputCp);
    this.form.addControl('inputLocation', this.inputLocation);
    this.form.addControl('inputComments', this.inputComments);
    this.form.addControl('inputState', this.inputState);
    this.form.addControl('inputReference', this.inputReference);
    this.form.addControl('inputStatus', this.inputStatus);
    if (this.address.cp != undefined) {
      this.submitPostalCode.emit(this.address.cp);
    }
  }

  close() {
    this.closeForm.emit(false);
  }

  editAddress() {
    this.submited = true;
    if (this.form.valid) {
      const data: Address = {
        id: this.address.id,
        userId: this.address.userId,
        deliveryTimes: this.address.deliveryTimes,
        name: this.form.get('inputName')!.value,
        street: this.form.get('inputStreet')!.value,
        streetNumber: this.form.get('inputStreetNumber')!.value,
        interiorNumber: this.form.get('inputInteriorNumber')!.value,
        suburb: this.form.get('inputSuburb')!.value,
        cp: this.form.get('inputCp')!.value,
        location: this.form.get('inputLocation')!.value,
        comments: this.form.get('inputComments')!.value,
        state: this.form.get('inputState')!.value,
        reference: this.form.get('inputReference')!.value,
        status: this.form.get('inputStatus')!.value == true ? 1 : 0,
      } as Address;
      this.submitForm.emit(data);
    }
  }

  selectPostalCode(postalCode: PostalCode) {
    this.form.get('inputCp')?.setValue(postalCode.postalCode);
    this.form.get('inputSuburb')?.setValue(postalCode.settlement);
    this.form.get('inputLocation')?.setValue(postalCode.municipality);
    this.form.get('inputState')?.setValue(postalCode.state);
  }

  applyFilterPostalCodes(e: any) {
    const input: string = e.target.value;
    if (input.length == 5) {
      this.submitPostalCode.emit(input);
    }
  }
}
