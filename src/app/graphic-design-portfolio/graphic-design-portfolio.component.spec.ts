import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicDesignPortfolioComponent } from './graphic-design-portfolio.component';

describe('GraphicDesignPortfolioComponent', () => {
  let component: GraphicDesignPortfolioComponent;
  let fixture: ComponentFixture<GraphicDesignPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicDesignPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicDesignPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
