import { actdetailService } from './../service/actdetail.service';
import { Actdetail } from './../models/actdetail';
import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController, NavController, PopoverController } from '@ionic/angular';
import { for9 } from '../models/for9';
import { formato9 } from '../models/formulario9';
import { software } from '../models/software';
import { formulario9Service } from '../service/formulario9.service';
import { InteractionService } from '../service/interaction.service';
import { SoftwareService } from '../service/software.service';
import { for9Service } from '../service/for9.service';
import { ExampleService } from '../service/example.service';
import {fechas} from'../formulario9/fecha.Component.js'
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-formulario9',
  templateUrl: './formulario9.component.html',
  styleUrls: ['./formulario9.component.scss'],
})
export class Formulario9Component implements OnInit {
  practiceDetailId=null
  Id:any;
  id:any;
  ide:number;
  ids:any;
  estudiante:string;
  student:number=null;
  studentId:any;
  finalId:number;
  actualDate:Date;
  startTime:Time;
  endTime:Time;
  totalHours:number=null;
observations:'';
  practiceId:number=null;
  actualDates:any
  fechaaa:Date;
  finalfech:String;
  
  
  Software:software[]=[];
  Formato9:formato9[]=[];
  /**actividad detail-------------------------------------------------------------------------------------------- */
  activitiesId:number=null;
  detailId:number=null;

  constructor(private menu: MenuController,
    public popoverController: PopoverController,
    private for9Service:formulario9Service,
    private interaction:InteractionService,
    private softwareService:SoftwareService,
    private actividaddetailService:actdetailService,
    private route:ActivatedRoute,
    private formato:for9Service,
    private exampleService:ExampleService,
    public navCtrl:NavController,
    private auth:AuthService,
    private router:Router) {
      this.menu.enable(false);
     }

  ngOnInit() {


    this.cargarActividad();
    this.Id=this.route.snapshot.paramMap.get("id");
    this.finalId=this.Id-1;
    this.practiceId=this.Id;
    this.ids=this.studentId;
    console.log("practiceId",this.practiceId)
    console.log("id para estudiante",this.ids)
 
    this.formato.lista().subscribe(data=>{
      console.log("Res",data)
      this.Formato9=data;
      this.id=this.Formato9[this.finalId].id;
      console.log("Id Datos",this.id)
      this.estudiante=this.Formato9[this.finalId].estudiante;
      console.log("Nombre estudiante",this.estudiante)
      this.studentId=this.Formato9[this.finalId].studentId;
      console.log("Id del estudiante",this.studentId)
      this.student=this.studentId;
      
    })
    
  }
  fechas(){
    let fechaCompleta=this.actualDate.toString()
    var dias=2;
    fechaCompleta

  }
  inicio(){
    this.router.navigate(['/inicioEstudiante',this.ids])
  }


  onCreate():void{

    var d = new Date(this.fechaaa),
    month = '' + (d.getUTCMonth()+1),
    day = '' + (d.getUTCDate()),
    year = d.getUTCFullYear();
    if (day.length < 2){
      day = '0' + day;
    }
if (month.length < 2) {
  month = '0' + month;
}  this.finalfech=[year, month, day].join('/');
console.log(month); // ??????? "07"
console.log(day); // ??????? "21"
console.log(year); // ??????? "2024"
this.actualDate= new Date(+year, +month - 1, +day);
console.log("fecha final:",this.actualDate)
    const formulario9=new for9 (this.actualDate,this.startTime,this.endTime,this.totalHours,this.observations,this.practiceId,this.student);
    this.for9Service.save(formulario9).subscribe(data=>this.practiceDetailId=data.ide);
    if(formulario9){
      this.interaction.presentToast('registro exitoso');
      this.router.navigate(['/perfil'])
    }
  }
  /**crear lista actividad------------------------------------------------------ */
  cargarActividad():void{
    this.softwareService.lista().subscribe(
      data=>{
        this.Software=data;
      },
      err=>{
        console.log(err);
      }
    )
  }
  logout(){
    this.auth.logout();
    this.interaction.presentToast("sesion finalizada");
    this.router.navigate(['/login'])

  }
  isModalOpen5 = false;
  setOpen5(isOpen: boolean) {
    this.isModalOpen5 = isOpen;
  }

}
