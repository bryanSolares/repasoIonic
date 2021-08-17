import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reordered',
  templateUrl: './list-reordered.page.html',
  styleUrls: ['./list-reordered.page.scss'],
})
export class ListReorderedPage implements OnInit {

  personajes: string[] = ['Aquaman', 'Superman', 'Batman', 'Mujer Maravilla', 'Flash'];
  canOrder = true;

  constructor() { }

  ngOnInit() {
  }

  doReorder(event) {
    const itemCuted = this.personajes.splice(event.detail.from, 1)[0];
    this.personajes.splice(event.detail.to, 0, itemCuted);
    event.detail.complete();
  }

}
