import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCssLibComponent } from './angular-css-lib.component';

describe('AngularCssLibComponent', () => {
  let component: AngularCssLibComponent;
  let fixture: ComponentFixture<AngularCssLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularCssLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularCssLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
