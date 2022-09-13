import { software } from './../User/models/software';
import { Pipe, PipeTransform } from '@angular/core';
import { carrera } from '../User/models/carrera';
@Pipe({
    name: 'filtroActividades'
  })
  export class FiltroActividadesPipe implements PipeTransform {
    transform(carreras:software[],texto:string):software[] {
        if(texto.length===0){return carreras}
        texto=texto.toLocaleLowerCase();
        return carreras.filter(carrera=>{
            return carrera.carrera.toLocaleLowerCase().includes(texto);
        }
        )
      
    }
  }
