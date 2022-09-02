import { tutorcompany } from 'src/app/User/models/tutcompany';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filtroTutor'
  })
  export class FiltroTutorPipe implements PipeTransform {
    transform(tutores:tutorcompany[],texto:string):tutorcompany[] {
        if(texto.length===0){return tutores}
        texto=texto.toLocaleLowerCase();
        return tutores.filter(tutor=>{
            return tutor.name.toLocaleLowerCase().includes(texto)
        })
    }
}
