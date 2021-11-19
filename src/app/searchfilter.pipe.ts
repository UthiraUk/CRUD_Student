import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(value: any, searchText: string[]): any {
    if(!value) return [];
    if(!searchText) return value;
    return value.filter((animal: any)=>{
      return animal['name'].toLowerCase().includes(searchText);
    });
  }

}
