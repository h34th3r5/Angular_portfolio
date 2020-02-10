import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  static getStaticMedia(): any {
    throw new Error("Method not implemented.");
  }

  staticMedia = {
    sparkleLounge: [{
      label: 'Logo for Sparkle Lounge Classic Guitars',
      small: '..assets/img/logos/sparkle_lounge_black.png',
      medium: '..assets/img/logos/sparkle_lounge_black.png',
      big: '..assets/img/logos/sparkle_lounge_black.png'
    }],
    Acme: [{
      label: 'Web banner for Acme Guitars',
      small: '..assets/img/logos/banner.jpg',
      medium: '..assets/img/logos/banner.jpg',
      big: '..assets/img/logos/banner.jpg'
    }]
  }
  

  constructor() { }

  getStaticMedia() {
    return this.staticMedia;
  }
}
