import { Pipe, PipeTransform } from '@angular/core';
import { company } from 'src/app/User/models/company';
import { Estudiante } from '../User/models/estudiante';
@Pipe({
    name: 'filtro1'
  })
  export class Filtro1Pipe implements PipeTransform {
    transform(student:Estudiante[], textos: string): Estudiante[] {
      if(textos.length === 0){return student;}
      textos=textos.toLocaleLowerCase();
  
     return student.filter(estudiant=>{
        return estudiant.name.toLocaleLowerCase().includes(textos)
      });
    }
  
  
  
  }
  