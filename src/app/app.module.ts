import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news/news.component';
import { HttpClientModule } from '@angular/common/http';
import { GlobalErrorComponent } from './components/global-error/global-error.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { FocusDirective } from './directives/focus.directive';
import { PostComponent } from './components/post-component/post-component.component'
import { CreateNewsComponent } from './components/create-news/create-news.component'

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    GlobalErrorComponent,
    FilterProductsPipe,
    ModalComponent,
    FocusDirective,
    PostComponent,
    CreateNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
