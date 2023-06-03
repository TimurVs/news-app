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
import { CreateNewsComponent } from './components/create-news/create-news.component';
import { ImageInputComponent } from './components/image-input/image-input.component';
import { FullNewsComponent } from './components/full-news/full-news.component';
import { ShortNewsComponent } from './components/short-news/short-news.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    GlobalErrorComponent,
    FilterProductsPipe,
    ModalComponent,
    FocusDirective,
    CreateNewsComponent,
    ImageInputComponent,
    FullNewsComponent,
    ShortNewsComponent,
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
