import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticDesignService {
  galleryStaticImages = {
    acmeGuitar: [
      {
        label: 'Logo & Poster Work',
        small: '../assets/img/logos/GOTV_heatherstump.png',
        medium: '../assets/img/logos/GOTV_heatherstump.png',
        big: '../assets/img/logos/GOTV_heatherstump.png',
        description: `Poster for St. Louis AIGA "Get Out The Vote" Campaign`
      },
      {
        small: '../assets/img/logos/banner.jpg',
        medium: '../assets/img/logos/banner.jpg',
        big: '../assets/img/logos/banner.jpg',
        description: 'Web banner for Acme Guitars, St. Louis, MO'
      },
      {
        small: '../assets/img/logos/sparkle_lounge_black.jpg',
        medium: '../assets/img/logos/sparkle_lounge_black.jpg',
        big: '../assets/img/logos/sparkle_lounge_black.jpg',
        description: 'Web logo for Sparkle Lounge Guitars, St. Louis, MO'
      },
      {
        small: '../assets/img/logos/logostatic-01.png',
        medium: '../assets/img/logos/logostatic-01.png',
        big: '../assets/img/logos/logostatic-01.png',
        description: 'Web logo for Kirsty Jayne Makeup, England, UK'
      }
    ],
    snowboards: [
      {
        label: 'Snowboard Designs',
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
      },
      {
        small: '../assets/img/logos/whitelinesmockup.png',
        medium: '../assets/img/logos/whitelinesmockup.png',
        big: '../assets/img/logos/whitelinesmockup.png',
        description: 'Snowboard concept design:Watercolor' 
      }
    ],
    weirdBirds: [
      {
        label: 'Weird Birds',
        small: '../assets/img/logos/Donut.png',
        medium: '../assets/img/logos/Donut.png',
        big: '../assets/img/logos/Donut.png',
        description: '"Donut"'
      },
      {
        small: '../assets/img/logos/Dreidel.png',
        medium: '../assets/img/logos/Dreidel.png',
        big: '../assets/img/logos/Dreidel.png',
        description: '"Dreidel"'
      },
      {
        small: '../assets/img/logos/Class.jpg',
        medium: '../assets/img/logos/Class.jpg',
        big: '../assets/img/logos/Class.jpg',
        description: '"Class"'
      },
      {
        small: '../assets/img/logos/loveyoumug.png',
        medium: '../assets/img/logos/loveyoumug.png',
        big: '../assets/img/logos/loveyoumug.png',
        description: '"Love You"'
      },
      {
        small: '../assets/img/logos/Flamingo_.png',
        medium: '../assets/img/logos/Flamingo_.png',
        big: '../assets/img/logos/Flamingo_.png',
        description: '"Flamingo"'
      }
    ],
    humanConnection: [
      {
        label: 'Human Connection Project',
        small: '../assets/img/logos/human_desc.png',
        medium: '../assets/img/logos/human_desc.png',
        big: '../assets/img/logos/human_desc.png'
      },
      {
        small: '../assets/img/logos/foryouiwill-01.png',
        medium: '../assets/img/logos/foryouiwill-01.png',
        big: '../assets/img/logos/foryouiwill-01.png',
        description: '"For you, I will"'
      },
      {
        small: '../assets/img/logos/ididntmeanto-01.png',
        medium: '../assets/img/logos/ididntmeanto-01.png',
        big: '../assets/img/logos/ididntmeanto-01.png',
        description: `"I didn't mean to"`
      },
      {
        small: '../assets/img/logos/ido-01.png',
        medium: '../assets/img/logos/ido-01.png',
        big: '../assets/img/logos/ido-01.png',
        description: '"I do"'
      },
      {
        small: '../assets/img/logos/illneverforget-01.png',
        medium: '../assets/img/logos/illneverforget-01.png',
        big: '../assets/img/logos/illneverforget-01.png',
        description: `"I'll never forget"`
      },
      {
        small: '../assets/img/logos/iloveyou-01.png',
        medium: '../assets/img/logos/iloveyou-01.png',
        big: '../assets/img/logos/iloveyou-01.png',
        description: '"I love you"'
      },
      {
        small: '../assets/img/logos/iloveyoumom-01.png',
        medium: '../assets/img/logos/iloveyoumom-01.png',
        big: '../assets/img/logos/iloveyoumom-01.png',
        description: '"I love you, mom"'
      },
      {
        small: '../assets/img/logos/imsorry-01.png',
        medium: '../assets/img/logos/imsorry-01.png',
        big: '../assets/img/logos/imsorry-01.png',
        description: `"I'm sorry"`
      },
      {
        small: '../assets/img/logos/yourenotalone-01.png',
        medium: '../assets/img/logos/yourenotalone-01.png',
        big: '../assets/img/logos/yourenotalone-01.png',
        description: `"You're not alone"`
      }
    ]
  };

  constructor() {}

  getStaticDesign() {
    return this.galleryStaticImages;
  }

  getAllAlbums() {
    const staticDesignArray = [];
    const keys = Object.keys(this.galleryStaticImages);
    keys.forEach(key => {
      staticDesignArray.push(this.galleryStaticImages[key]);
    });
    return staticDesignArray;
  }
}
