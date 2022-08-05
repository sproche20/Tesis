import { ActivatedRoute, Router } from '@angular/router';
import { InteractionService } from 'src/app/User/service/interaction.service';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { formato9 } from '../models/formulario9';
import { for9Service } from '../service/for9.service';
import { for9 } from '../models/for9';
import { TeacherService } from '../service/teacher.service';
import { Teacher } from '../models/teacher';
import {  tutorService } from './../../User/service/tutor.service'
import { tutorcompany } from '../models/tutcompany';

@Component({
  selector: 'app-formato9',
  templateUrl: './formato9.component.html',
  styleUrls: ['./formato9.component.scss'],
})
export class Formato9Component implements OnInit {
  Id:any;
  id:any;
  ide:number;
  ids:any;
  finalId:number;

  starDate:Date;
  endDate:Date;
  hours:Number=null;
  studentId:Number=null;
  teacherId:Number=null;
  tutorId:Number=null;
  formulary:formato9[]=[];
  teacher:Teacher[]=[];
  tutorcompany:tutorcompany[]=[];



  constructor(private menu: MenuController,
    public popoverController: PopoverController,
    private for9Service:for9Service,
    private route:ActivatedRoute,
    private interaction:InteractionService,
    private router:Router,
    private teacherService:TeacherService,
    private tutorService:tutorService,


    ) { 
      this.menu.enable(false);
    }

  ngOnInit() {
    this.Id=this.route.snapshot.paramMap.get("id");
    this.finalId=this.Id-1;
    this.studentId=this.Id;
    this.cargarTeacher();
    this.cargarTutor();
    
  }

  onCreate():void{
    const for9=new formato9 (this.starDate,
      this.endDate,this.hours,this.studentId,this.teacherId,this.tutorId);
    this.for9Service.save(for9).subscribe();
    if(for9){
      this.interaction.presentToast('registro exitoso');
      this.router.navigate(['/for9'])
    }
}
  /**tabla profesor------------------------------------------- */
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


