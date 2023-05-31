import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http'
import { catchError, delay, Observable, retry, tap, throwError } from 'rxjs'
import { INews } from '../models/news'
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

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)

    return throwError(() =>  error.message)
  }



  // public getAllNews(): Observable< {news: INews[] } > {
  //    return this.http.get<{news: INews[]}>(`https://webapi.autodoc.ru/api/news/`)
  //      // {
  //      //   params: new HttpParams({
  //      //     fromObject: {limit: 100}
  //      //   })
  //      .pipe(
  //        // delay(3000),
  //        // retry(2),
  //        // tap(news =>this.news = news.news),
  //        catchError(this.errorHandler.bind(this))
  //    )}

  createNews(news: INews): Observable<INews>{
      return this.http.post<INews>('https://fakestoreapi.com/products', news)
        .pipe(
          retry(2),
          tap(prod => this.news.push(prod)),
          catchError(this.errorHandler.bind(this)))
  }

}
