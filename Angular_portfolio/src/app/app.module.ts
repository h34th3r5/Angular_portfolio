import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { PhotographyPortfolioComponent } from './photography-portfolio/photography-portfolio.component';
import { GraphicDesignPortfolioComponent } from './graphic-design-portfolio/graphic-design-portfolio.component';
import { WebPortfolioComponent } from './web-portfolio/web-portfolio.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioPageComponent,
    ContactPageComponent,
    AboutPageComponent,
    PhotographyPortfolioComponent,
    GraphicDesignPortfolioComponent,
    WebPortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
