import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http'
import { catchError, Observable, retry, tap, throwError } from 'rxjs'
import { INews, IFullNews } from '../models/news'
import { ErrorService } from './error.service'

@Injectable(
  {
    providedIn: 'root'
  })

  export class NewsService {
    constructor(
      private http: HttpClient,
      private errorService: ErrorService ) {}

  news: INews[]

  public getAllNews(pageNumber: number, pageSize: number): Observable<Array<INews>> {
    return this.http.get<Array<INews>>(`https://webapi.autodoc.ru/api/news/${pageNumber}/${pageSize}`);
  }

  getFullNews(urlNews: string): Observable<IFullNews> {
    console.log('----->>>>>>URLNEWS', urlNews)
    return this.http.get<IFullNews>(`https://webapi.autodoc.ru/api/news/item/${urlNews}`).pipe(
      catchError(this.errorHandler.bind(this))
    );
  }


  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)

    return throwError(() =>  error.message)
  }

  createNews(news: INews): Observable<INews>{
      return this.http.post<INews>('https://fakestoreapi.com/products', news)
        .pipe(
          retry(2),
          tap(prod => this.news.push(prod)),
          catchError(this.errorHandler.bind(this)))
  }

}
