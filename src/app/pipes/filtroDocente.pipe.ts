import { Teacher } from 'src/app/User/models/teacher';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filtroDocente'
  })
  export class FiltroDocentePipe implements PipeTransform {
    transform(profesores:Teacher[],texto:string):Teacher[] {
        if(texto.length===0){return profesores}
        texto=texto.toLocaleLowerCase();
        return profesores.filter(profesor=>{
            return profesor.name.toLocaleLowerCase().includes(texto);
        })

    }

  }  