import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router) { }
  visible: boolean = true;
  ngOnInit() {
  }

  goToLogin() {
    this.visible = false;
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 800);

  }
}
