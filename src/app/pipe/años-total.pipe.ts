import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'anosTotal'
})
export class AñosTotalPipe implements PipeTransform {

  transform(value: Date): number {
    
    const today = new Date();
    const age = today.getFullYear() - value.getFullYear();

    // Ajustar la edad si aún no se ha cumplido el aniversario
    if (today < new Date(today.getFullYear(), value.getMonth(), value.getDate())) {
      return age - 1;
    }

    return age;

  }

}
