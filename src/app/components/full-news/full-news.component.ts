import { Component, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { IFullNews } from '../../models/news'
import { NewsService } from '../../services/news.service'

@Component({
  selector: 'app-full-news',
  templateUrl: './full-news.component.html',
  styleUrls: ['./full-news.component.scss']
})
export class FullNewsComponent implements OnInit{

  public urlNews: string;
  public fullNews$: Observable<IFullNews> | null = null;


  @Input('urlNews') public set setUrlNews(url: string) {
    debugger
    if (url) {
      debugger
      this.urlNews = url;
      this.fullNews$ = this.newsService.getFullNews(url);
    }
  }

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    console.log('SOM', this.urlNews )
  }

}
