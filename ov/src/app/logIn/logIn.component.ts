import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logIn',
  templateUrl: './logIn.component.html',
  styleUrls: ['./logIn.component.scss']
})
export class LogInComponent implements OnInit {
  visible: boolean = true;
  name: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.name="valami"
  }
  goToReg() {
    this.visible = false;
    setTimeout(() => {
      this.router.navigate(['/registration']);
    }, 800);


  }
}
