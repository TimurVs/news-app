import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { INews } from '../../models/news'
import { Router } from '@angular/router'
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ruLocale } from 'ngx-bootstrap/locale';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';

defineLocale('ru', ruLocale);

@Component({
  selector: 'app-short-news',
  templateUrl: './short-news.component.html',
  styleUrls: ['./short-news.component.scss']
})
export class ShortNewsComponent implements OnInit{

  @Input() public item: INews

  constructor(private router: Router) {}

  public onUrlClick(): void {
    this.router.navigate(['/full-news', this.item.url]);
  }
  ngOnInit(): void {
    registerLocaleData(localeRu);
  }

}
