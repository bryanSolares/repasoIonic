import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  nombre = 'Bryan Solares';
  usuario = {
    emai: '',
    password: ''
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('onSubmit');
  }

}
