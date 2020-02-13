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
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';




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
    AnimateOnScrollModule.forRoot(),
    HttpClientModule,
    TeximateModule,
    FormsModule,
    NgxGalleryModule,
    AnimateOnScrollModule
  ],
  providers: [StaticDesignService, Title],
  bootstrap: [AppComponent]
})
export class AppModule { }

