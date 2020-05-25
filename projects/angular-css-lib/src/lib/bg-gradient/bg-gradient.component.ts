import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-bg-gradient',
  templateUrl: './bg-gradient.component.html',
  styleUrls: ['./bg-gradient.component.scss']
})
export class BgGradientComponent implements OnInit {

  background: any;

  constructor() { }

  ngOnInit(): void {
  }

}
