import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  user: User;

  constructor(private router: Router, private fb: FormBuilder) { }
  visible: boolean = true;

  ngOnInit(): void {
    this.registrationForm = this.fb.group(this.formValue);
  }

  formValue = {
    username: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    password1: ['', [Validators.required, Validators.minLength(8),]],
    password2: '',
  }


  get email() {
    return this.registrationForm.get('email')
  }
  get username() {
    return this.registrationForm.get('username')
  }
  get password1() {
    return this.registrationForm.get('password1')
  }
  get password2() {
    return this.registrationForm.get('password2')
  }
  onSubmit() {

    if (this.registrationForm.valid)
      console.log(this.registrationForm.value)


  };

  goToLogin() {
    this.visible = false;
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 800);

  }
}
