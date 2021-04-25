import { Component, OnInit } from '@angular/core';
import {faTwitter, faYoutube, faFacebookMessenger} from '@fortawesome/free-brands-svg-icons';
import { navLinks } from '../navLink';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  navLinks = navLinks
  faTwitter = faTwitter;
  faFacebook = faFacebookMessenger;
  faYoutube = faYoutube;
  dateNow = Date.now()
  constructor() { }

  ngOnInit(): void {
  }

}
