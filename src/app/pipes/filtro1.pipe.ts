import { Pipe, PipeTransform } from '@angular/core';
import { company } from 'src/app/User/models/company';
import { Estudiante } from '../User/models/estudiante';
@Pipe({
    name: 'filtro1'
  })
  export class Filtro1Pipe implements PipeTransform {
    transform(student:Estudiante[], texto: string): Estudiante[] {
      if(texto.length === 0){return student;}
      texto=texto.toLocaleLowerCase();
  
     return student.filter(estudiante=>{
        return estudiante.name.toLocaleLowerCase().includes(texto)
      });
    }
  
  
  
  }
  