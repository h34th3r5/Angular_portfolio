import { Component, OnInit } from '@angular/core';
import { faInstagram, faFacebookSquare, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
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
