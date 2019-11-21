import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticDesignComponent } from './static-design.component';

describe('StaticDesignComponent', () => {
  let component: StaticDesignComponent;
  let fixture: ComponentFixture<StaticDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
