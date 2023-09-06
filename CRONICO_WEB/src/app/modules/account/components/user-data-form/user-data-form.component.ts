import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  Input,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '@core/interfaces/user';

@Component({
  selector: 'app-user-data-form',
  templateUrl: './user-data-form.component.html',
  styleUrls: ['./user-data-form.component.scss'],
})
export class UserDataFormComponent implements OnInit, OnDestroy {
  @Input() userData: User = {} as User;
  @Output() submitForm = new EventEmitter();
  @Output() closeForm = new EventEmitter();
  submited: boolean = false;
  readonly form: FormGroup = new FormGroup({});
  inputName: FormControl = new FormControl();
  inputSurName: FormControl = new FormControl();
  inputSecondSurName: FormControl = new FormControl();
  inputEmail: FormControl = new FormControl();
  inputBirthday: FormControl = new FormControl();
  inputPicture: FormControl = new FormControl();
  constructor() {}

  ngOnDestroy(): void {
    this.submited = false;
    this.form.reset();
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.inputName = new FormControl(this.userData.name, [
      Validators.required,
      Validators.maxLength(100),
    ]);
    this.inputSurName = new FormControl(this.userData.surname, [
      Validators.required,
      Validators.maxLength(100),
    ]);
    this.inputSecondSurName = new FormControl(this.userData.secondSurname, [
      Validators.required,
      Validators.maxLength(100),
    ]);
    this.inputEmail = new FormControl(this.userData.email, [
      Validators.required,
      Validators.maxLength(100),
    ]);
    this.inputBirthday = new FormControl(this.userData.birthDate, [
      Validators.required,
    ]);
    this.inputPicture = new FormControl(this.userData.picture, [
      Validators.required,
      Validators.maxLength(200),
    ]);

    this.addControlls();
  }

  addControlls() {
    Object.keys(this.form.controls).forEach((control) => {
      this.form.removeControl(control);
    });
    this.form.addControl('inputName', this.inputName);
    this.form.addControl('inputSurName', this.inputSurName);
    this.form.addControl('inputSecondSurName', this.inputSecondSurName);
    this.form.addControl('inputEmail', this.inputEmail);
    this.form.addControl('inputBirthday', this.inputBirthday);
    this.form.addControl('inputPicture', this.inputPicture);
  }

  close() {
    this.closeForm.emit(false);
  }

  editUser() {
    let newUser: User = {
      id: this.userData.id,
      profileId: this.userData.profileId,
      userName: this.userData.userName,
      name: this.form.get('inputName')?.value,
      surname: this.form.get('inputSurName')?.value,
      secondSurname: this.form.get('inputSecondSurName')?.value,
      birthDate: this.form.get('inputBirthday')?.value,
      email: this.form.get('inputEmail')?.value,
      picture: this.form.get('inputPicture')?.value,
    } as any;
    this.submitForm.emit(newUser);
  }

  uploadImage($event: any) {
    console.log($event);
  }
}
