import { Component, OnInit, Input } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { faInstagram, faFacebookSquare, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  faInstagram = faInstagram;
  faFacebookSquare = faFacebookSquare;
  faTwitter = faTwitter;
  faEnvelope = faEnvelope;

  collapsed = true;

  constructor(config: NgbDropdownConfig) {
    config.autoClose = true;
  }

  closeNav() {
    const isMobile = /iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile|Android/i.test(navigator.userAgent);
    if (isMobile) {
      return this.collapsed = true;
    }
}


  ngOnInit() {
  }
}