import { NgModule } from '@angular/core';
import { AngularCssLibComponent } from './angular-css-lib.component';
import { BgGradientComponent } from './bg-gradient/bg-gradient.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [ AngularCssLibComponent, BgGradientComponent ],
  imports: [ CommonModule ],
  exports: [ AngularCssLibComponent, BgGradientComponent ]
})
export class AngularCssLibModule { }
