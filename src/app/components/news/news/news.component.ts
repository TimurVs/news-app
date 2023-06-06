import { AfterViewInit, Component, Input, OnInit } from '@angular/core'
import { INews } from '../../../models/news'
import { ActivatedRoute } from '@angular/router'
import { BehaviorSubject, fromEvent, Observable, Subscription } from 'rxjs'
import { NewsService } from '../../../services/news.service'
import { ModalService } from '../../../services/modal.service'
import { NewsLocalStorageService } from '../../../services/news-local.service'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements AfterViewInit, OnInit {
  private currentPage = 1;
  private pageSize = 10;
  private totalPages = 100;

  newsListLocal: INews[] = [];

  urlNews: string;

  public isLoading = false

  private obsArray = new BehaviorSubject<Array<INews>>([]);
  items$: Observable<Array<INews>>;

  private scrollSubscription: Subscription;

  constructor(private activateRoute: ActivatedRoute, public newsService: NewsService, public modalService: ModalService, public NewsLocalStorageService: NewsLocalStorageService ) {
    this.urlNews = this.activateRoute.snapshot.params['urlNews'];
  }

  ngOnInit() {
    this.newsService.getAllNews(this.currentPage, this.pageSize).subscribe((data: any) => {
      const newsList = [...this.newsListLocal, ...data.news];
      this.obsArray.next(newsList);
    });

    this.NewsLocalStorageService.getNewsList().subscribe(newsList => {
      this.newsListLocal = newsList;
      const obsArrayValue = this.obsArray.getValue();
      const newObsArrayValue = [...newsList, ...obsArrayValue];
      this.obsArray.next(newObsArrayValue);
    });
    console.log('--->>>>LOCALLIST',this.newsListLocal)

    this.items$ = this.obsArray.asObservable();

  }

  ngAfterViewInit() {
    const scroll$ = fromEvent(window, 'scroll')

    this.scrollSubscription = scroll$.subscribe((scrollPos) => {
      const pos = (document.documentElement.scrollTop || document.body.scrollTop) + window.innerHeight;
      const max = document.documentElement.scrollHeight;
      if (pos >= max && !this.isLoading) {
        if (this.currentPage < this.totalPages) {
          this.isLoading = true;
          this.currentPage += 1;
          this.newsService.getAllNews(this.currentPage, this.pageSize).subscribe((data: any) => {
            const newArr = [...this.obsArray.getValue(), ...data.news];
            this.obsArray.next(newArr);
            this.isLoading = false;
          })
        } else {
          this.scrollSubscription.unsubscribe();
        }
      }
    });
  }
    details = false
}
