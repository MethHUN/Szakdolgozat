import { Component, OnInit } from '@angular/core';
import { navLinks } from '../navLink';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isOpened = false;
  collapse = true;
  navLinks = navLinks;
  constructor() { }

  ngOnInit(): void {
    console.log(navLinks)
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
