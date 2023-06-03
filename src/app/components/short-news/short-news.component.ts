import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { INews } from '../../models/news'
import { Router } from '@angular/router'

@Component({
  selector: 'app-short-news',
  templateUrl: './short-news.component.html',
  styleUrls: ['./short-news.component.scss']
})
export class ShortNewsComponent implements OnInit{

  @Input('items') public items: INews

  constructor(private router: Router) {}

  public onUrlClick(): void {
    this.router.navigate(['/full-news', this.items.url]);
  }



  ngOnInit(): void {
  }

}
