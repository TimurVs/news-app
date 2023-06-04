import { Component, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { IFullNews } from '../../models/news'
import { NewsService } from '../../services/news.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-full-news',
  templateUrl: './full-news.component.html',
  styleUrls: ['./full-news.component.scss']
})
export class FullNewsComponent implements OnInit{

  public urlNews: string;
  public fullNews$: Observable<IFullNews> | null = null;
  private url: string | null;

  constructor(private newsService: NewsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.url = this.route.snapshot.paramMap.get('url');
    this.fullNews$ = this.newsService.getFullNews(this.url);
  }

}
