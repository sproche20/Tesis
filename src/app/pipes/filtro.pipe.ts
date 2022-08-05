import { Pipe, PipeTransform } from '@angular/core';
import { company } from 'src/app/User/models/company';
import { Estudiante } from '../User/models/estudiante';


@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(companias:company[], texto: string): company[] {
    if(texto.length === 0){return companias;}
    texto=texto.toLocaleLowerCase();

   return companias.filter(compania=>{
      return compania.name.toLocaleLowerCase().includes(texto)
    });
  };
}
