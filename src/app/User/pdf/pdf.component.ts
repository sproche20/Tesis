import { jsPDF } from 'jspdf';
import { imagenBase64 } from './ImagenBase64';

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
import { DatosReporteDto } from '../models/Dtos/DatosReportesDtos';
import { EstudianteService } from '../service/estudiante.service';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss'],
})
export class PdfComponent implements OnInit {

  practiceDetailId=null
  Id:any;
  id:any;
  ide:number;
  ids:any;
  empresa:any
  tutorId:any
  profesor:any
  tutor:any
  estudiante:any;
  student:number=null;
  studentId:any;
  finalId:number;
  startDate:any;
  endDate:any;
  hours:any;
  image: any;
  totalHours:number=null;
observations:'';
  practiceId:number=null;
  
  
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
    private studentService: EstudianteService,

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
      console.log("Id Datos",this.id);

      this.profesor=this.Formato9[this.finalId].profesor;
      console.log("profesor: ",this.profesor)
      this.tutor=this.Formato9[this.finalId].tutor;
      console.log("tutor: ",this.tutor);
      this.startDate=this.Formato9[this.finalId].startDate;
      console.log("fecha de inicio: ",this.startDate);
      this.endDate=this.Formato9[this.finalId].endDate;

      console.log("fecha final",this.endDate);
      this.hours=this.Formato9[this.finalId].hours;
      console.log("Horas totales: ",this.hours);
      this.estudiante=this.Formato9[this.finalId].estudiante;
      console.log("Nombre estudiante",this.estudiante)
      this.estudiante=this.Formato9[this.finalId].estudiante;
      console.log("Nombre estudiante",this.estudiante)
      this.empresa=this.Formato9[this.finalId].empresa;
      console.log("Nombre de la empresa ",this.empresa)
      this.tutorId=this.Formato9[this.finalId].tutorId;
      console.log("Id del tutor ",this.tutorId)

      this.studentId=this.Formato9[this.finalId].studentId;
      console.log("Id del estudiante",this.studentId)
      this.student=this.studentId;
      
      
    })
    
  }
  inicio(){
    this.router.navigate(['/inicioEstudiante',this.student])
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
/*------PDF--------------------------------**/
generatePDF() {
  this.studentService.cargarReporte(this.studentId,this.tutorId).subscribe((resp) => {
    console.log("resultado",resp)
    let datosReporte: DatosReporteDto = resp;
    this.cargarInformacionPdf(datosReporte);
  });
}

async cargarInformacionPdf(datosReporte: DatosReporteDto) {
  let imagen = new imagenBase64();

  this.image = imagen.pagina1;

  const pdf = new jsPDF({ unit: 'px', format: 'a4' });
  pdf.addImage(this.image, 'PNG', 5, 5, 435, 620);

  pdf.setFontSize(8);

  //semana del
  pdf.text('25', 135, 122);
  pdf.text('30', 170, 122);
  //mes
  pdf.text('AGOSTO', 235, 122);

  //AÑO
  pdf.text('22', 330, 122);

  //nombre
  pdf.text(datosReporte.nombreCompleto.toString(), 55, 175);

  //cedula
  pdf.text(datosReporte.identificaciob.toString(), 245, 175);

  //carrera
  pdf.text(datosReporte.nombreCarrera.toString(), 55, 208);

  //institucion beneficiaria

  pdf.text(datosReporte.nombreInstirucionBeneficiaria.toString(), 55, 247);

  //horas reportadas
  pdf.setFontSize(24);
  pdf.text('50', 382, 242);

  //tabla de actividades
  pdf.setFontSize(10);
  pdf.text('2022-08-06', 60, 370, null, 90);

  pdf.setFontSize(10);
  pdf.text('2022-08-07', 60, 430, null, 90);

  pdf.setFontSize(10);
  pdf.text('2022-08-07', 60, 490, null, 90);

  pdf.setFontSize(10);
  pdf.text('2022-08-07', 60, 550, null, 90);
  pdf.addPage('a4');
  this.image=imagen.pagina2
  pdf.addImage(this.image, 'PNG', 5, 5, 435, 620);
  pdf.addPage('a4');
  this.image=imagen.pagina3
  pdf.addImage(this.image, 'PNG', 5, 5, 435, 620);
  pdf.save('example.pdf');
}
}








