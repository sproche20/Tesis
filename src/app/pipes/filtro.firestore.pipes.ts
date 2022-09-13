import { user } from './../User/models/user';
import { Pipe, PipeTransform } from '@angular/core';
import { company } from 'src/app/User/models/company';
import { Estudiante } from '../User/models/estudiante';


@Pipe({
  name: 'filtroFirestore'
})
export class FiltroFirestorePipe implements PipeTransform {

  transform(usuario:user[], texto: string): user[] {
    if(texto.length === 0){return usuario}
    texto=texto.toLocaleLowerCase();

   return usuario.filter(usuarios=>{
      return usuarios.nombre.toLocaleLowerCase().includes(texto)
    });
  };
}