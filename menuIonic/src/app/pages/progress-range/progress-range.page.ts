import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-range',
  templateUrl: './progress-range.page.html',
  styleUrls: ['./progress-range.page.scss'],
})
export class ProgressRangePage implements OnInit {

  porcentaje = 0.0;

  constructor() { }

  ngOnInit() {
  }

  rangeChange(event) {
    this.porcentaje = event.detail.value / 100;
  }

}
