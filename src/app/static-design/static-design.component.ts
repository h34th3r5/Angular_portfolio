import { Component, OnInit } from '@angular/core';
import { StaticDesignService } from './static-design.service';
import { Title } from '@angular/platform-browser';
import { NgxGalleryOptions, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-static-design',
  templateUrl: './static-design.component.html',
  styleUrls: ['./static-design.component.css']
})
export class StaticDesignComponent implements OnInit {

  staticDesignPhotos: any[];
  galleryOptions: NgxGalleryOptions[];



  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }


  constructor(staticDesign: StaticDesignService, private titleService: Title) { 
    this.staticDesignPhotos = staticDesign.getAllAlbums();
  }

  ngOnInit() {
    this.setTitle('Static Design | Heather Stump Art');

    this.galleryOptions = [
      {
        width: '100%',
        height: '800px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        previewCloseOnClick: true,
        previewCloseOnEsc: true,
        imageDescription: false
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20,
        previewCloseOnClick: true,
        previewCloseOnEsc: true
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }

    ];

    
  }


}
