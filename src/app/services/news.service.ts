import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse} from '@angular/common/http'
import { catchError, Observable, retry, tap, throwError } from 'rxjs'
import { INews, IFullNews } from '../models/news'
import { ErrorService } from './error.service'
import { NewsLocalStorageService } from './news-local.service'

@Injectable(
  {
    providedIn: 'root'
  })

  export class NewsService {
    constructor(
      private http: HttpClient,
      private errorService: ErrorService,
      private newsLocalStorageService: NewsLocalStorageService) {}

  news: INews[]

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)

    return throwError(() =>  error.message)
  }

  public getAllNews(pageNumber: number, pageSize: number): Observable<Array<INews>> {
    return this.http.get<Array<INews>>(`https://webapi.autodoc.ru/api/news/${pageNumber}/${pageSize}`);
  }

  getFullNews(urlNews: string | null): Observable<IFullNews> {
    return this.http.get<IFullNews>(`https://webapi.autodoc.ru/api/news/item/${urlNews}`).pipe(
      catchError(this.errorHandler.bind(this))
    );
  }

  createNews(news: INews, imageFile?: File) {
    const formData = new FormData();
    formData.append('title', news.title);
    formData.append('description', news.description);
    if (news.publishedDate) {
      formData.append('publishedDate', news.publishedDate.toISOString());
    }
    if (imageFile) {
      formData.append('titleImage', imageFile, imageFile.name);
    }
    const newsList = JSON.parse(localStorage.getItem('news') || '[]');
    newsList.unshift(news);
    localStorage.setItem('news', JSON.stringify(newsList));
    this.newsLocalStorageService.updateNewsList();
    return this.http.post<INews>('http://localhost:4300/', formData)
      .pipe(
        retry(2),
        catchError(this.errorHandler.bind(this)))
  }

}
