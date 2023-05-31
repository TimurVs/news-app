import { Component, AfterViewInit } from '@angular/core'
import { INews } from './models/news'
import { NewsService } from './services/news.service'
import { ModalService } from './services/modal.service'
import { BehaviorSubject, fromEvent, map, Observable, take, Subscription } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit {
  private currentPage = 1;
  private pageSize = 10;
  private totalPages = 3;

  private obsArray = new BehaviorSubject<Array<INews>>([]);
  items$: Observable<Array<INews>>;

  private scrollSubscription: Subscription;

  constructor(public newsService: NewsService, public modalService: ModalService) {}

  ngAfterViewInit() {
    const content = document.querySelector('.items') as HTMLElement;
    const scroll$ = fromEvent(content!, 'scroll').pipe(map(() => { return content!.scrollTop; }));

    this.scrollSubscription = scroll$.subscribe((scrollPos) => {
      let limit = content!.scrollHeight - content!.clientHeight;
      if (scrollPos === limit) {
        if (this.currentPage < this.totalPages) {
          this.currentPage += 1;
          this.newsService.getAllNews(this.currentPage, this.pageSize).subscribe((data: any) => {
            const newArr = [...this.obsArray.getValue(), ...data];
            this.obsArray.next(newArr);
          })
        } else {
          this.scrollSubscription.unsubscribe();
        }
      }
    });
  }

  ngOnInit() {
    this.newsService.getAllNews(this.currentPage, this.pageSize).subscribe((data: any) => {
      this.obsArray.next(data.news);
    })

    this.items$ = this.obsArray.asObservable();
  }

}
