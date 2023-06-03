import { Component, Input } from '@angular/core';
import { INews } from '../../../models/news'
import { Router } from '@angular/router'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  @Input() news: INews

  constructor(private router: Router) {}

  viewFullNews(url: string | undefined) {
    if (url) {
      console.log('---->>>', url)
      this.router.navigate(['news', `${url}`]);
    }
  }

    details = false
}
