import { tutorService } from './../../service/tutor.service';
import { for9Service } from './../../service/for9.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { formato9 } from '../../models/formulario9';
import { MenuController, PopoverController } from '@ionic/angular';
import { TeacherService } from '../../service/teacher.service';
import { Teacher } from '../../models/teacher';
import { tutorcompany } from '../../models/tutcompany';
@Component({
  selector: 'app-editar9',
  templateUrl: './editar9.component.html',
  styleUrls: ['./editar9.component.scss'],
})
export class Editar9Component implements OnInit {
  formulario9:formato9=null;
  teacher:Teacher[]=[];
  tutorcompany:tutorcompany[]=[];
  
  

  constructor( public popoverController: PopoverController,
    private router:Router,
    private menu:MenuController,
    private for9Service:for9Service,
    private activatedRoute: ActivatedRoute,
    private teacherService:TeacherService,
    private tutorService: tutorService
  
) {this.menu.enable(false); }


  
  ngOnInit() {
    this.cargarTeacher();
    this.cargarTutor();
    const id = this.activatedRoute.snapshot.params.id;
    this.for9Service.detail(id).subscribe(
      data => {
        this.formulario9 = data;
      },
      err => {
        this.router.navigate(['/']);
      }
    );
  }
  onUpdate(){
    const id = this.activatedRoute.snapshot.params.id;
    this.for9Service.update(this.formulario9).subscribe(
      data => {
        this.router.navigate(['window.location.reload();']);
      },
      err => {
      }
    );
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
  cargarTutor():void{
    this.tutorService.lista().subscribe(
      data=>{
        this.tutorcompany=data;
      },
      err=>{
        console.log(err);
      }
    )
  }
  


}
