import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  items: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  doRefresh(evt) {
    console.log(evt);

    setTimeout(() => {
      this.items = Array(20);
      evt.target.complete();
    }, 1500);
  }

}
