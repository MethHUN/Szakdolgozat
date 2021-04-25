import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})


export class EditUserComponent implements OnInit, OnDestroy {
  myForm: FormGroup;
  user: User;

  formValue = {
    username: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8),]],
    newPassword1: '',
    newPassword2: '',
  }
  newPasswordError: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group(this.formValue);
  }

  get email() {
    return this.myForm.get('email')
  }
  get username() {
    return this.myForm.get('username')
  }
  get password() {
    return this.myForm.get('password')
  }
  get newPassword1() {
    return this.myForm.get('newPassword1')
  }
  get newPassword2() {
    return this.myForm.get('newPassword2')
  }


  onSubmit() {

    if (this.myForm.valid)
      console.log(this.myForm.value)


  };

  ngOnDestroy(): void {

  }
}



