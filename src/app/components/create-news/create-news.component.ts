import { Component, EventEmitter, Output } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

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
    const titleImageUrl = this.recordForm.get('titleImageUrl')?.value;

    if (title && description) {
      const record = { title, description, titleImageUrl };
      const records = JSON.parse(localStorage.getItem('records') || '[]');
      records.unshift(record);
      localStorage.setItem('records', JSON.stringify(records));
      this.recordForm.reset();
    }
  }


}
