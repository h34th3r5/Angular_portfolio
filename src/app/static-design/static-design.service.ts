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
  snowboards: [{
    label: 'Snowboard: Bubble',
    small: '../assets/img/logos/bubblebothsides.png',
    medium: '../assets/img/logos/bubblebothsides.png',
    big: '../assets/img/logos/bubblebothsides.png',
    description: 'Snowboard concept design: Bubble'
  },
  {
    small: '../assets/img/logos/crystalsnowmockup.png',
    medium: '../assets/img/logos/crystalsnowmockup.png',
    big: '../assets/img/logos/crystalsnowmockup.png',
    description: 'Snowboard concept design: Crystal'
  },
  {
    small: '../assets/img/logos/rightleftgoofyregmockup.png',
    medium: '../assets/img/logos/rightleftgoofyregmockup.png',
    big: '../assets/img/logos/rightleftgoofyregmockup.png',
    description: 'Snowboard concept design: Right/Left'
  },
  {
    small: '../assets/img/logos/swirlmockup.png',
    medium: '../assets/img/logos/swirlmockup.png',
    big: '../assets/img/logos/swirlmockup.png',
    description: 'Snowboard concept design: Swirl'
  },
  {
    small: '../assets/img/logos/girlsketchmockup.png',
    medium: '../assets/img/logos/girlsketchmockup.png',
    big: '../assets/img/logos/girlsketchmockup.png',
    description: 'Snowboard concept design: Girl Sketch'
  }]
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
