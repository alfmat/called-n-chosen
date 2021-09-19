import { Component, OnInit } from '@angular/core';
import { ARTICLES } from '../article-text';
import { Article } from '../Article';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-indiv-article',
  templateUrl: './indiv-article.component.html',
  styleUrls: ['./indiv-article.component.css']
})
export class IndivArticleComponent implements OnInit {
  articles: Article[] = ARTICLES;
  user: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.user = data.id);
  }

}
