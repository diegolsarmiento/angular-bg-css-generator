import { Component, OnInit } from '@angular/core';
import { ColorfulBackgroundGenerator, ColorfulBackgroundLayer } from 'colorful-background-css-generator';

@Component({
  selector: 'lib-bg-gradient',
  templateUrl: './bg-gradient.component.html',
  styleUrls: ['./bg-gradient.component.scss']
})
export class BgGradientComponent implements OnInit {

  background: any;
  gradient: any;
  degreeValue: any;
  hue: any;
  saturation: any;
  light: any;
  posColorValue: any;
  transparency: any;

  constructor() { }

  ngOnInit(): void {
    this.gradient = new ColorfulBackgroundGenerator();
    // This adds 5 layers to the generator
    // The parameters are: degree[0-360],
    //                     h[0-360],
    //                     s[0-1],
    //                     l[0-1],
    //                     posColor[0-100],
    //                     posTransparency[0-100]
    // The lowest layer (at the bottom) in the css is the first added layer.
    // bottom layer

    // Example:
    /* this.gradient.addLayer(new ColorfulBackgroundLayer({degree: 325, h: 5, s: 0.95, l: 0.55, posColor: 100}));
    this.gradient.addLayer(new ColorfulBackgroundLayer({degree: 225, h: 75, s: 0.9, l: 0.7, posColor: 30, posTransparency: 80}));
    this.gradient.addLayer(new ColorfulBackgroundLayer({degree: 155, h: 150, s: 0.95, l: 0.7, posColor: 10, posTransparency: 80}));
    this.gradient.addLayer(new ColorfulBackgroundLayer({degree: 55, h: 230, s: 0.95, l: 0.65, posColor: 0, posTransparency: 70}));
    // top layer
    this.gradient.addLayer(new ColorfulBackgroundLayer({degree: 20, h: 300, s: 0.9, l: 0.65, posColor: 0, posTransparency: 55})); */
    this.randomConfig();
  }

  randomNumber(min, max): number {
    const random = Math.floor(Math.random() * (max - min) + min);
    return random;
  }

  randomDecimal(min, max): number {
    const random = (Math.random() * (max - min) + min).toFixed(2);
    return random;
  }

  randomConfig(): void {
    const layer = this.randomNumber(2, 3);
    const layers = Array(layer);

    /* Button */
    this.randomValues();
    this.gradient.addLayer(new ColorfulBackgroundLayer({degree: this.degreeValue, h: this.hue, s: this.saturation, l: this.light,
      posColor: 60,  posTransparency: 100 }));

    for (const item of layers) {
      this.randomValues();
       /* other on top */
      this.gradient.addLayer(new ColorfulBackgroundLayer({degree: this.degreeValue, h: this.hue, s: this.saturation, l: this.light,
      posColor: this.posColorValue, posTransparency:  this.transparency }));
    }
    this.gradient.assignStyleToElementId('colorful');
  }

  randomValues() {
    this.degreeValue = 180;
    this.hue = this.randomNumber(0, 360);
    this.saturation = this.randomDecimal(0.6, 0.9);
    this.light = this.randomDecimal(0.3, 0.7);
    this.posColorValue = this.randomNumber(10, 50);
    this.transparency = this.randomNumber(20, 60);
  }

}
