import { EstudianteService } from './../../User/service/estudiante.service';
import { Component, OnInit } from '@angular/core';
import{Estudiante}from'src/app/User/models/estudiante';
@Component({
  selector: 'app-lista-estudents',
  templateUrl: './lista-estudents.component.html',
  styleUrls: ['./lista-estudents.component.scss'],
})
export class ListaEstudentsComponent implements OnInit {
  estudiantes:Estudiante[]=[];
  constructor(private estudianteService:EstudianteService) { }

  ngOnInit() {
    this.cargarEstudiante();
  }
  cargarEstudiante():void{
    this.estudianteService.lista().subscribe(
      data=>{
        this.estudiantes=data;
      },
      err=>{
        console.log(err);
      }
    )

  }

}
