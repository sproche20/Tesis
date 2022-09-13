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
import { AuthService } from '../service/auth.service';

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
  inicFech:Date;
  inicioFech:String;
  finFech:Date;
  finalFech:String;

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
    private auth:AuthService


    ) { 
      this.menu.enable(false);
    }

  ngOnInit() {
    this.cargarDatos();
    this.Id=this.route.snapshot.paramMap.get("id");
    this.finalId=this.Id-1;
    this.studentId=this.Id;
    this.cargarTeacher();
    this.cargarTutor();
    
  }

  onCreate():void{
    /*---------fecha Inicio-----------------------------*/
    var d = new Date(this.inicFech),
    month = '' + (d.getUTCMonth()+1),
    day = '' + (d.getUTCDate()),
    year = d.getUTCFullYear();
    if (day.length < 2){
      day = '0' + day;
    }
if (month.length < 2) {
  month = '0' + month;
}  this.inicioFech=[year, month, day].join('/');
console.log(month); // 👉️ "07"
console.log(day); // 👉️ "21"
console.log(year); // 👉️ "2024"
this.starDate= new Date(+year, +month - 1, +day);
console.log("fecha Inicio:",this.starDate)

    /*----------fecha final-----------------------------*/
    var e = new Date(this.finFech),
    month = '' + (e.getUTCMonth()+1),
    day = '' + (e.getUTCDate()),
    year = e.getUTCFullYear();
    if (day.length < 2){
      day = '0' + day;
    }
    if (month.length < 2) {
      month = '0' + month;
    }  this.finalFech=[year, month, day].join('/');
    console.log(month); // 👉️ "07"
console.log(day); // 👉️ "21"
console.log(year); // 👉️ "2024"
this.endDate= new Date(+year, +month - 1, +day);
console.log("fecha final:",this.endDate)
    /*----------fecha final-----------------------------*/
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

/**Datos estudiante--------------------------------------------------- */
cargarDatos():void{
  const id = this.route.snapshot.params.id;
  this.for9Service.listPracticasEstudiante(id).subscribe(
    data=>{
      this.formulary=data;
    },
    err=>{
      console.log(err);
    }
  )

}
borrarDatos(id:number) {
  this.for9Service.delete(id).subscribe(
    data => {
      console.log(data);
      console.log("borrado exitoso");
      this.cargarDatos();    
    },
  );
}

logout(){
  this.auth.logout();
  this.interaction.presentToast("sesion finalizada");
  this.router.navigate(['/loginteacher'])

}


}


