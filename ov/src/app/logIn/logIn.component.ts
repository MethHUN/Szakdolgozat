import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-logIn',
  templateUrl: './logIn.component.html',
  styleUrls: ['./logIn.component.scss']
})
export class LogInComponent implements OnInit {
  visible: boolean = true;
  name: string;

  loginForm: FormGroup;
  user: User;

  formValue = {
    username: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.minLength(8),]],
  }

  constructor(private router: Router,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group(this.formValue);
  }

  get username() {
    return this.loginForm.get('username')
  }
  get password() {
    return this.loginForm.get('password')
  }
  onSubmit() {
    if (this.loginForm.valid)
      console.log(this.loginForm.value)
  };

  goToReg() {
    this.visible = false;
    setTimeout(() => {
      this.router.navigate(['/registration']);
    }, 800);


  }
}
