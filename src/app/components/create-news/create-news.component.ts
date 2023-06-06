import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { INews } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.scss']
})
export class CreateNewsComponent {
  recordForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    titleImageUrl: new FormControl(''),
  });

  @Output() imageSelected = new EventEmitter<File>();

  constructor(private newsService: NewsService) {}

  onImageSelected(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      this.recordForm.patchValue({
        titleImageUrl: result,
      });
    };
    reader.readAsDataURL(file);
  }

  onSubmit(): void {
    const title = this.recordForm.get('title')?.value;
    const description = this.recordForm.get('description')?.value;

    if (title && description) {
      const news: INews = {
        title,
        description,
        publishedDate: new Date(),
        titleImageUrl: ''
      };

      const titleImageFile = this.recordForm.get('titleImage')?.value;
      this.newsService.createNews(news, titleImageFile).subscribe(
        (result) => {
          console.log('News created successfully: ', result);
          this.recordForm.reset();
        },
        (error) => {
          console.error('Error occurred while creating news: ', error);
        }
      );
    }
  }

}
