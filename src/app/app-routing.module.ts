import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullNewsComponent } from './components/full-news/full-news.component';
import { ShortNewsComponent } from './components/short-news/short-news.component';
import { NewsComponent } from './components/news/news/news.component'

const routes: Routes = [
  { path: '', component: NewsComponent },
  { path: 'news', component: ShortNewsComponent },
  { path: 'full-news/:url', component: FullNewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

