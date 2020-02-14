import { Component, OnInit, ViewChild } from '@angular/core';
import { NgsRevealService } from 'ngx-scrollreveal';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-web-dev',
  templateUrl: './web-dev.component.html',
  styleUrls: ['./web-dev.component.css']
})
export class WebDevComponent implements OnInit {
  
  constructor(private revealService: NgsRevealService, private titleService: Title) { }

  afterRevealSubscription: any;
public setTitle(newTitle: string) {
  this.titleService.setTitle(newTitle);
}

  ngOnInit() {
    this.setTitle('Web Design | Heather Stump Art');
  }

}
