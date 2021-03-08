import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isOpened = false;
  collapse = true;
  constructor() { }

  ngOnInit(): void {
  }
  opener(): void{
    this.isOpened = !this.isOpened;
  }

  classRemover(): void {
    this.collapse = true;
    this.isOpened =  false;
  }
  classAdd(): void {
    this.collapse =  !this.collapse;
  }

}
