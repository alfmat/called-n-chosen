import { Component, OnInit } from '@angular/core';
import { ArticleBoxComponent } from '../article-box/article-box.component';
import { ARTICLES } from '../article-text';
import { Article } from '../Article'


@Component({
  selector: 'app-all-articles',
  templateUrl: './all-articles.component.html',
  styleUrls: ['./all-articles.component.css']
})
export class AllArticlesComponent implements OnInit {

  articles: Article[] = ARTICLES;
  constructor() { }

  ngOnInit(): void {
  }

}
