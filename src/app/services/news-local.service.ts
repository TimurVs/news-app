import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { INews } from '../models/news'

@Injectable({
  providedIn: 'root'
})
export class NewsLocalStorageService {
  private newsList = new BehaviorSubject<INews[]>([]);

  constructor() {
    this.updateNewsList();
    window.addEventListener('storage', () => {
      this.updateNewsList();
    });
  }

  public updateNewsList() {
    const news = JSON.parse(localStorage.getItem('news') || '[]');
    this.newsList.next(news);
  }

  public getNewsList() {
    return this.newsList.asObservable();
  }
}

