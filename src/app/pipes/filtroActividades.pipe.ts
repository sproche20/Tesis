import { software } from './../User/models/software';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filtroActividades'
  })
  export class FiltroActividadesPipe implements PipeTransform {
    transform(actividades:software[],texto:string):software[] {
        if(texto.length===0){return actividades}
        texto=texto.toLocaleLowerCase();
        return actividades.filter(actividad=>{
            return actividad.description.toLocaleLowerCase().includes(texto);
        }
        )
      
    }
  }
