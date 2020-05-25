import { Component, OnInit } from '@angular/core';
import * as tinygradient from 'tinygradient';

@Component({
  selector: 'lib-bg-gradient',
  templateUrl: './bg-gradient.component.html',
  styleUrls: ['./bg-gradient.component.scss']
})
export class BgGradientComponent implements OnInit {

  background: any;
  gradient: any;

  constructor() { }

  ngOnInit(): void {
    this.gradient = tinygradient([
      '#ff0000',
      '#00ff00',
      '#0000ff'
    ]);
  }

}
