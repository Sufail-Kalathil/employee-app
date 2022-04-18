import {Pipe, PipeTransform} from '@angular/core';
import {Employee} from "../../modules/employee/employee-typ";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Employee[], filter: string): any {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(item => {
      return (item.name.toLowerCase().includes(filter.toLowerCase())
        || item.email.toLowerCase().includes(filter.toLowerCase())
        || item.username.toLowerCase().includes(filter.toLowerCase())
        || item.phone.toLowerCase().includes(filter.toLowerCase()))
    });
  }

}
