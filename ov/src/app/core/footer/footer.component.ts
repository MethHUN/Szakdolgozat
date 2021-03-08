import { Component, OnInit } from '@angular/core';
import {faTwitter, faYoutube, faFacebookMessenger} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faTwitter = faTwitter;
  faFacebook = faFacebookMessenger;
  faYoutube = faYoutube;
  dateNow = Date.now()
  constructor() { }

  ngOnInit(): void {
  }

}
