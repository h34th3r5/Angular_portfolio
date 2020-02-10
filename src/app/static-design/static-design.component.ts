import { Component, OnInit, Input } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { PhotosService } from './photos.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-static-design',
  templateUrl: './static-design.component.html',
  styleUrls: ['./static-design.component.css']
})
export class StaticDesignComponent implements OnInit {

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  @Input() album: NgxGalleryImage[];
  galleryOptions: NgxGalleryOptions[];

  staticMedia;

  constructor(staticMedia: PhotosService, private titleService: Title) { 
    this.staticMedia = PhotosService.getStaticMedia();
  }

  ngOnInit() {
    this.setTitle('Static Design | Heather Stump Art');

    this.galleryOptions = [
      {
        width: '100%',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        previewCloseOnClick: true,
        previewCloseOnEsc: true,
        imageDescription: true,
        previewDescription: true
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
        previewDescription: false
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }


    ]
  }

 


}
