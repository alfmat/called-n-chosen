import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../Article';

@Component({
  selector: 'app-article-box',
  templateUrl: './article-box.component.html',
  styleUrls: ['./article-box.component.css']
})
export class ArticleBoxComponent implements OnInit {
  @Input() article!: Article;
  
  constructor() { }

  ngOnInit(): void {
  }

}
