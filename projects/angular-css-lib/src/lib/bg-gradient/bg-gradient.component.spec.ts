import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgGradientComponent } from './bg-gradient.component';

describe('BgGradientComponent', () => {
  let component: BgGradientComponent;
  let fixture: ComponentFixture<BgGradientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgGradientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgGradientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
