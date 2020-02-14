import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { TeximateModule } from 'ngx-teximate';
import { FormsModule } from '@angular/forms';
import { NgxGalleryModule } from 'ngx-gallery';
import 'hammerjs';
import {NgsRevealModule} from 'ngx-scrollreveal';
import {AngularFireModule } from '@angular/fire';




import { AppComponent } from './app.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { StaticDesignComponent } from './static-design/static-design.component';
import { WebDevComponent } from './web-dev/web-dev.component';
import { ResumeComponent } from './resume/resume.component';
import { StaticDesignService } from './static-design/static-design.service';
import { StaticDesignCardComponent } from './static-design/static-design-card/static-design-card.component';



const appRoutes: Routes = [
  { path: 'contact', component: ContactPageComponent },
  { path: 'home', component: HomeComponent},
  { path: 'static-design', component: StaticDesignComponent},
  { path: 'web-design', component: WebDevComponent},
  { path: 'resume', component: ResumeComponent},
  { path: '**', redirectTo: 'home' }
];


export const firebaseConfig = {
  apiKey: 'AIzaSyDtpPmBAgevPrOOaQ1ESkbYl4wAeJmPrcA',
    authDomain: 'heather-stump-art-porfolio.firebaseapp.com',
    databaseURL: 'https://heather-stump-art-porfolio.firebaseio.com',
    projectId: 'heather-stump-art-porfolio',
    storageBucket: 'heather-stump-art-porfolio.appspot.com',
    messagingSenderId: '731356873095',
    appId: '1:731356873095:web:f8c6642be311cecc195322',
    measurementId: 'G-JMKP58G4HX'
}

@NgModule({
  declarations: [
    AppComponent,
    ContactPageComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    StaticDesignComponent,
    WebDevComponent,
    ResumeComponent,
    StaticDesignCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    FontAwesomeModule,
    // tslint:disable-next-line: max-line-length
    RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'top', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload', useHash: true}),
    HttpClientModule,
    TeximateModule,
    FormsModule,
    NgxGalleryModule,
    NgsRevealModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [StaticDesignService, Title],
  bootstrap: [AppComponent]
})
export class AppModule { }

