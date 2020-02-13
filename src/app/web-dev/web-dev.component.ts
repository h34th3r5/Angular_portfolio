import { Component, OnInit, ViewChild } from '@angular/core';
import { TextAnimation } from 'ngx-teximate';
import { slideInUp } from 'ng-animate';
import { NgsRevealService } from 'ngx-scrollreveal';

@Component({
  selector: 'app-web-dev',
  templateUrl: './web-dev.component.html',
  styleUrls: ['./web-dev.component.css']
})
export class WebDevComponent implements OnInit {

text = '2020: The Year of Angular';

enterAnimation: TextAnimation = {
  animation: slideInUp,
  delay: 300,
  type: 'letter'
}
  afterRevealSubscription: any;
  constructor(private revealService: NgsRevealService) { }

  ngOnInit() {
  }

}
