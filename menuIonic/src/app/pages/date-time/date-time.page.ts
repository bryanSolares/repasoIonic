import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNacimiento: Date = new Date();
  customYearsValues = [2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029];
  customPickerOptions = {
    buttons: [
      {
        text: 'Hola',
        handler: (event) => console.log(event)
      },
      {
        text: 'Mundo',
        handler: (event) => console.log(event)
      },
    ]
  };

  constructor() { }

  ngOnInit() {
  }

  cambioFecha(event) {
    console.log(event.detail.value);
  }

}
