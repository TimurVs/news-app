import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './components/news/news/news.component'
import { OneNewsComponent } from './components/one-news/one-news.component'

const routes: Routes = [
  { path: '', component: NewsComponent },
  { path: 'news/:urlNews', component: OneNewsComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
