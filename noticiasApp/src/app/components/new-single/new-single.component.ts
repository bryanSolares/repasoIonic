import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../intefaces/interfaces';

@Component({
  selector: 'app-news-single',
  templateUrl: './new-single.component.html',
  styleUrls: ['./new-single.component.scss'],
})
export class NewSingleComponent implements OnInit {

  @Input() newsSingle: Article;
  @Input() counterNews: number;

  constructor() { }

  ngOnInit() { }

}
