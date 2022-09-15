import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'words',
})
export class WordsPipe implements PipeTransform {
  transform(value: any): any {
    /* return value[0].toUpperCase() + value.slice(1); */
    switch (value) {
      case 'Alive':
        return 'Vivo';
      case 'Dead':
        return 'Muerto';
      case 'unknown':
        return 'Desconocido';
      default:
        return value;
    }
  }
}
