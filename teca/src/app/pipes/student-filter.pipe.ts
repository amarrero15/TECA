import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'studentFilter'
})
export class StudentFilterPipe implements PipeTransform {

  transform(infoArray: any[], text: string, col: string): any[] {
    if (text===''){
      return infoArray;
    }
    return infoArray.filter(item=>{
      return item[col].toLowerCase().includes(text.toLowerCase());
    })
  }

}
