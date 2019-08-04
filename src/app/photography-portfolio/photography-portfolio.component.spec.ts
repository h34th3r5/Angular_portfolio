import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographyPortfolioComponent } from './photography-portfolio.component';

describe('PhotographyPortfolioComponent', () => {
  let component: PhotographyPortfolioComponent;
  let fixture: ComponentFixture<PhotographyPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotographyPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographyPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
