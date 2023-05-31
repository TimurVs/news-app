import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { NewsService } from '../../services/news.service'
import { ModalService } from '../../services/modal.service'

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.scss']
})
export class CreateNewsComponent implements OnInit{

  constructor(private newsService: NewsService, private modalService: ModalService) {}

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    description: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    titleImageUrl: new FormControl<string>('')
  })

  get title() {
    return this.form.controls.title as FormControl
  }

  get description() {
    return this.form.controls.description as FormControl
  }

  get titleImageUrl() {
    return this.form.controls.titleImageUrl as FormControl
  }

  ngOnInit(): void {}

  onSubmit() {
    this.newsService.createNews({
      title: this.form.value.title as string,
      description: this.form.value.description as string,
      titleImageUrl: this.form.value.titleImageUrl as string,
    }).subscribe(() => {
      this.modalService.close()

    })
  }
}
