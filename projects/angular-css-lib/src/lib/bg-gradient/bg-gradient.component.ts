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
      { color: '#d8e0de', pos: 0 },
      { color: '#255B53', pos: 0.8 },
      { color: '#000000', pos: 1 }
    ]);
    this.background = this.gradient.css();
  }

}
