import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoria',
})
export class CategoriaPipe implements PipeTransform {
  transform(value: string): string {
    console.log(value);
    switch (value) {
      case '43':
        return 'code';
      case '4':
        return 'home';
    }

    return 'code';
  }
}
