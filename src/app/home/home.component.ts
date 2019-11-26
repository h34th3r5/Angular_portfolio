import { Component, OnInit } from '@angular/core';
import { faInstagram, faFacebookSquare, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { TextAnimation } from 'ngx-teximate';
import { fadeInDown } from 'ng-animate';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  text = 'social';

  enterAnimation: TextAnimation = {
    animation: fadeInDown,
    delay: 50,
    type: 'letter'
  };

  faInstagram = faInstagram;
  faFacebookSquare = faFacebookSquare;
  faTwitter = faTwitter;

  constructor() { }

  ngOnInit() {
  }
}
