import { Component, OnInit } from '@angular/core';
import { ArticleBoxComponent } from './article-box/article-box.component';
import { ARTICLES } from './article-text';
import { Article } from './Article'

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: Article[] = ARTICLES;
  
  constructor() { }

  ngOnInit(): void {
  }

}
