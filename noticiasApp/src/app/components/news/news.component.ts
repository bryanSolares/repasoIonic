import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../intefaces/interfaces';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {

  @Input() news: Article[] = [];

  constructor() { }

  ngOnInit() { }

}
