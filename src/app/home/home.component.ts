import { Component, OnInit } from '@angular/core';
import { faInstagram, faFacebookSquare, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  socialName = 'social||contact_';
  faInstagram = faInstagram;
  faFacebookSquare = faFacebookSquare;
  faTwitter = faTwitter;
  faEnvelope = faEnvelope;

  constructor() { }

  ngOnInit() {
  }
}




