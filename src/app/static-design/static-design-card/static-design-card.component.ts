import { Component, OnInit, Input } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import 'hammerjs';

@Component({
  selector: 'app-static-design-card',
  templateUrl: './static-design-card.component.html',
  styleUrls: ['./static-design-card.component.css']
})
export class StaticDesignCardComponent implements OnInit {
  
 galleryOptions: NgxGalleryOptions[];
  @Input() album: NgxGalleryImage[];


  constructor() { }

  ngOnInit()  {


    this.galleryOptions = [
      {
        width: '100%',
        height: '300px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        previewCloseOnClick: true,
        previewCloseOnEsc: true,
        imageDescription: false,
        previewDescription: true,
        thumbnailsSwipe: true,
        thumbnails: true,
        arrowPrevIcon: 'fa fa-arrow-circle-left',
        arrowNextIcon: 'fa fa-arrow-circle-right'
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
        previewDescription: true,
        thumbnailsSwipe: true,
        thumbnails: true,
        previewArrows: true,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      {
        breakpoint: 450, 
        width: '100%',
        height: '100px', 
        thumbnailsPercent: 100
      },
      {
        breakpoint: 770, 
        width: '100%',
        height: '100px'
      }

  ];
  }

}
