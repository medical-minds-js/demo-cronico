import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss'],
})
export class RequestFormComponent implements OnInit {
  @Input() name: string = '';
  @Input() email: string = '';
  @Output() submitForm = new EventEmitter();
  @Output() closeForm = new EventEmitter();

  submited: boolean = false;
  readonly form: FormGroup = new FormGroup({});
  private inputName: FormControl = new FormControl();
  private inputEmail: FormControl = new FormControl();
  private inputProduct: FormControl = new FormControl();
  constructor() {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.inputName = new FormControl({ value: null, disabled: false }, [
      Validators.required,
    ]);
    this.inputEmail = new FormControl({ value: null, disabled: false }, [
      Validators.required,
    ]);
    this.inputProduct = new FormControl({ value: null, disabled: false }, [
      Validators.required,
    ]);
    Object.keys(this.form.controls).forEach((control) => {
      this.form.removeControl(control);
    });
    this.form.addControl('inputName', this.inputName);
    this.form.addControl('inputEmail', this.inputEmail);
    this.form.addControl('inputProduct', this.inputProduct);
  }

  onCloseForm() {
    this.resetForm();
    this.closeForm.emit(true);
  }

  onSubmitForm() {
    this.submited = true;
    if (this.form.valid) {
      const data: {
        name: string;
        email: string;
        product: string;
      } = {
        name: this.form.get('inputName')?.value,
        email: this.form.get('inputEmail')?.value,
        product: this.form.get('inputProduct')?.value,
      };
      this.submitForm.emit(data);
    }
  }

  resetForm() {
    this.submited = false;
    if (this.form) {
      this.form.patchValue({ inputName: null });
      this.form.patchValue({ inputEmail: null });
      this.form.patchValue({ inputProduct: null });
      this.form.reset();
    }
  }
}
