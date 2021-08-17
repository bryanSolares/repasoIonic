import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage implements OnInit {

  favorito = false;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.favorito = !this.favorito;
  }

}
