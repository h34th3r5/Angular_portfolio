import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  { path: 'contact', component: ContactPageComponent },
  { path: 'home', component: HomeComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    ContactPageComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'top', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload'}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

