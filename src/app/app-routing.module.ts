import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { GraphicDesignPortfolioComponent } from './graphic-design-portfolio/graphic-design-portfolio.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { WebPortfolioComponent } from './web-portfolio/web-portfolio.component';
import { PhotographyPortfolioComponent } from './photography-portfolio/photography-portfolio.component';


const routes: Routes = [
  {path: 'portfolio', component: PortfolioPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'photography', component: PhotographyPortfolioComponent},
  {path: 'graphic-design', component: GraphicDesignPortfolioComponent},
  {path: 'web-design', component: WebPortfolioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AboutPageComponent, ContactPageComponent, GraphicDesignPortfolioComponent, PortfolioPageComponent, WebPortfolioComponent, PhotographyPortfolioComponent]
