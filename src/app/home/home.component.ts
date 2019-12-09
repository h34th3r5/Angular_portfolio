import { Component, OnInit } from '@angular/core';
import { faInstagram, faFacebookSquare, faTwitter } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  socialName = 'socials:';
  faInstagram = faInstagram;
  faFacebookSquare = faFacebookSquare;
  faTwitter = faTwitter;

  constructor() { }

  ngOnInit() {
  }
}




