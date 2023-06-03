import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { Observable, Subscription } from 'rxjs'
import { IFullNews } from '../../models/news'
import { NewsService } from '../../services/news.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-one-news',
  templateUrl: './one-news.component.html',
  styleUrls: ['./one-news.component.scss']
})
export class OneNewsComponent implements OnInit, OnDestroy, AfterViewInit{

  urlNews!: string;
  subscription = new Subscription();
  @ViewChild("fullNewsContent") public content: ElementRef


  public oneNews$: Observable<IFullNews> | null = null;

  constructor(private newsService: NewsService, private router: ActivatedRoute) {
    this.subscription.add(
      this.router.params.subscribe((params) =>{
        this.urlNews = params['urlNews']
      })
    )
  }

  ngOnInit(): void {
    this.oneNews$ = this.newsService.getFullNews(this.urlNews);
    console.log('onenews--->>>', this.oneNews$)

  }

  ngAfterViewInit(){
    this.subscription.add(
      this.oneNews$!.subscribe((res) => {
        this.content.nativeElement.innerHTML = res.text;
      })
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}

