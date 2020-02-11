import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticDesignService {

galleryStaticImages = {
    acmeGuitar: [{
      label: 'Acme Guitars',
      small: '../assets/img/logos/banner.jpg',
      medium: '../assets/img/logos/banner.jpg',
      big: '../assets/img/logos/banner.jpg',
      description: 'Web banner for Acme Guitars, St. Louis, MO'
  }],
  sparkleLounge: [{
    label: 'Sparkle Lounge Guitars',
    small: '../assets/img/logos/sparkle_lounge_black.jpg',
    medium: '../assets/img/logos/sparkle_lounge_black.jpg',
    big: '../assets/img/logos/sparkle_lounge_black.jpg',
    description: 'Web logo for Sparkle Lounge Guitars, St. Louis, MO'
}],
};

  constructor() { }

  getStaticDesign() {
    return this.galleryStaticImages;
  }


  getAllAlbums() {
    const staticDesignArray = []
    const keys = Object.keys(this.galleryStaticImages);
    keys.forEach(key => {
      staticDesignArray.push(this.galleryStaticImages[key]);
    });
    return staticDesignArray;
  }

}
