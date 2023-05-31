import { Pipe, PipeTransform } from '@angular/core';
import { INews } from '../models/news'

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: INews[], searchRequest: string): INews[] {
    if (searchRequest.length === 0) return products;
    return products.filter(p => p.title.toLowerCase().includes(searchRequest.toLowerCase()));
  }

}
