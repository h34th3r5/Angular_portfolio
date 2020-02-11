import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticDesignCardComponent } from './static-design-card.component';

describe('StaticDesignCardComponent', () => {
  let component: StaticDesignCardComponent;
  let fixture: ComponentFixture<StaticDesignCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticDesignCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticDesignCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
