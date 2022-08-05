import { carrera } from './../../../User/models/carrera';
import { TeacherService } from './../../../User/service/teacher.service';
import { Component, OnInit } from '@angular/core';
import {Teacher}from 'src/app/User/models/teacher';
import { Router } from '@angular/router';
import { CarreraService } from 'src/app/User/service/carrera.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {
  teacher:Teacher[]=[];
  carreras:carrera[]=[];

  constructor(private teacherService:TeacherService,
    private carreraService:CarreraService,
    private router:Router
    ) { }

  ngOnInit() {
    this.cargarTeacher();
    this.cargarCarrera();
  }
  cargarTeacher():void{
    this.teacherService.lista().subscribe(
      data=>{
        this.teacher=data;
      },
      err=>{
        console.log(err);
      }
    )
  }
  cargarCarrera():void{
    this.carreraService.lista().subscribe(
      data=>{
        this.carreras=data;
      },
      err=>{
        console.log(err);
      }
    )
  }

}
