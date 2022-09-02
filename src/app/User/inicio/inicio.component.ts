


import { PracticeReportDto } from './../models/Dtos/PracticeReportDto';


import { actividadesDto } from './../models/Dtos/actividadesDto';

import { jsPDF } from 'jspdf';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AlertController,
  MenuController,
  ModalController,
  NavController,
  PopoverController,
} from '@ionic/angular';
import { InteractionService } from '../service/interaction.service';
import { for9Service } from '../service/for9.service';
import { formato9 } from '../models/formulario9';
import { for9 } from '../models/for9';
import { actdetailService } from '../service/actdetail.service';
import { Actdetail } from '../models/actdetail';
import { formulario9Service } from '../service/formulario9.service';
import { SoftwareService } from '../service/software.service';
import { ExampleService } from '../service/example.service';
import { software } from '../models/software';
import { imagenBase64 } from './ImagenBase64';
import { EstudianteService } from '../service/estudiante.service';
import { DatosReporteDto } from '../models/Dtos/DatosReportesDtos';
import { Estudiante } from '../models/estudiante';
import { DetalleReporteDto } from '../models/Dtos/DetalleReporteDto';

import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {
  actDetail: Actdetail[] = [];
  foro9: for9[] = [];
  formulary: formato9[] = [];

  isModalOpen = false;

  formularioSeleccionado: formato9;
  //**---------------------------actividad seleccionar------------------------------- */
  //**---------------------------actividad seleccionar------------------------------- */
  practiceDetailId: any;
  activitiesId: number = null;
  detailId: number = null;
  Software: software[] = [];

  estudiantes: Estudiante[] = [];
  activitieDetailId = 1;
  Id: any;
  Ids: any;
  tutor: any
  actualDate: Date;
  endDate:Date;
  finalId: number;
  image: any;
  image2:any
  carrera: any;
  inicial:any
  final:any
  acti:any;


  //**---------------------------actividad seleccionar------------------------------- */

  constructor(
    public navCtrl: NavController,
    public popoverController: PopoverController,
    private interaction: InteractionService,
    private menu: MenuController,
    private for9Service: for9Service,
    private formato9: formulario9Service,
    private router: Router,
    private auth:AuthService,

    private studentService: EstudianteService,

    private activatedRoute: ActivatedRoute,
    public modalController: ModalController,
    private actividaddetailService: actdetailService,
    //**---------------------------actividad seleccionar------------------------------- */
    //**---------------------------actividad seleccionar------------------------------- */
    private softwareService: SoftwareService,
    private exampleService: ExampleService
  ) {
    this.menu.enable(false);
  }

  ngOnInit() {
    this.cargarRegistro();
    this.cargarDatos();
    
    this.Id = this.activatedRoute.snapshot.paramMap.get("id");
    this.finalId = this.Id - 1;
    console.log("id estudiante", this.Id);
  }

  openMenu() {
    this.menu.open();
  }

  cargarDatos(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.for9Service.listPracticasEstudiante(id).subscribe(
      (data) => {
        this.formulary = data;
      },
      (err) => {
        console.log(err);
      }
    );
    this.Ids = id;
  }
  cargarRegistro(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.formato9.listPracticas(id).subscribe(
      (data) => {
        this.foro9 = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  cargarActivities(): void {
    this.formato9.lista().subscribe(
      (data) => {
        this.foro9 = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  borrarActividad(id: number) {
    this.formato9.delete(id).subscribe((data) => {
      console.log(data);
      console.log('borrado exitoso');
      this.cargarDatos();
    });
  }
  logout(){
    this.auth.logout();
    this.interaction.presentToast("sesion finalizada");
    this.router.navigate(['/login'])

  }
/*-------------------------------fechas-------------------------------------------*/


  //**---------------------------Prueba actividad seleccionar---------------------------- */
  //**---------------------------Prueba actividad seleccionar------------------------------- */
  fechas(){
    let fechaCompleta=this.actualDate.toString().substr(0,4) +this.actualDate.toString().substr(5,2)+this.actualDate.toString().substr(8,2)
    console.log(fechaCompleta)
    this.inicial=fechaCompleta
    let fechafinal=this.endDate.toString().substr(0,4) +this.endDate.toString().substr(5,2)+this.endDate.toString().substr(8,2)
    this.final=fechafinal
    console.log(fechaCompleta)
    console.log(fechafinal)
  }

  generatePDF(index) {
    console.log(index)
    this.formularioSeleccionado = this.formulary[index];
    this.for9Service.listPracticasFechas(this.formularioSeleccionado.id,this.inicial,this.final).subscribe(
      (resp) => {
      console.log("resultado", resp)
      var datosReporte: PracticeReportDto = resp;
      this.cargarInformacionPdf(datosReporte);
    },
    );
  }

  async cargarInformacionPdf(datosReporte: PracticeReportDto) {

    console.log(datosReporte)

    let imagen = new imagenBase64();

    this.image = imagen.pagina1;

    const pdf = new jsPDF({ unit: 'px', format: 'a4' });
    pdf.addImage(this.image, 'PNG', 5, 5, 435, 620);


    pdf.setFontSize(8);

    //semana del

    //pdf.text(datosReporte.startDate.toString(), 135, 102);
    //pdf.text(datosReporte.endDate.toString(), 170, 102);
    //mes
    //pdf.text(datosReporte.nombreMesTexto.toString(), 235, 602);




    //AÑO
    //pdf.text('22', 330, 602);
    //nombre
    pdf.text(datosReporte.studentName.toString(), 55, 175);
    //cedula
    pdf.text(datosReporte.studentNui.toString(), 245, 175);
    //carrera
    pdf.text(datosReporte.careerName.toString(), 55, 208);
    //institucion beneficiaria
    pdf.text(datosReporte.companyName.toString(), 55, 247);
    //horas reportadas
    pdf.setFontSize(24);
    pdf.text('50', 382, 242);
    //tabla de actividades

    if (datosReporte.practiceDetails) {
      var columna = 60
      var columna1 = 90
      var columna2 = 120
      var columna3 = 145
      var columna5 = 285
      var fila = 365
      var filaHora = 355
      var filaTexto = 330
      var i = 0
      var columnas = 165
      var filaText = 330
      var a=0
      datosReporte.practiceDetails.forEach(detail => {
        if(i<4){
          pdf.setFontSize(10);
          pdf.text(detail.currentDate.toString(), columna, (fila + (60 * i)), null, 90);
          pdf.text(detail.startTime.toString(), columna1, (fila + (60 * i)), null, 90);
          pdf.text(detail.endTime.toString(), columna2, (fila + (60 * i)), null, 90);
          pdf.text(detail.totalHours.toString(), columna3, (filaHora + (60 * i)));
          detail.activityDetails.forEach(detalles=>{
            pdf.setFontSize(8);
            pdf.text(detalles.id.toString(),columnas,(filaText+(25*a)))
           /* if(a>0&&a<3){
              pdf.text(detalles.actividad.toString(),columnas,(filaText+(32*a)))
            }*/
            a++
         })
          pdf.setFontSize(8);
          detail.observations && 
          pdf.text(detail.observations.toString(), columna5, (filaTexto + (60 * i)))
        }
          i++ 
      })  
    }
    /*if (datosReporte.practiceDetails) {
      var columnas = 165
      var filaText = 330
      var a=0
      datosReporte.practiceDetails.forEach(detal => {
        detal.activityDetails.forEach(detalles=>{
            pdf.setFontSize(8);
            pdf.text(detalles.actividad.toString(),columnas,(filaText+(25*a)))
           /* if(a>0&&a<3){
              pdf.text(detalles.actividad.toString(),columnas,(filaText+(32*a)))
            }
            a++
         })
 

      })

    }*/
   /* if(datosReporte.actividades){
      var columnas = 165
      var filaText = 330
      var a=0
      datosReporte.actividades.forEach(detalle=>{
        pdf.setFontSize(8);
        pdf.text(detalle.nombreActividad.toString(),columnas,(filaText+(60*a)));
        a++
      })

    }*/


  

    pdf.addPage('a4');
    this.image2 = imagen.pagina2
    pdf.addImage(this.image2, 'PNG', 5, 5, 435, 620);
    if (datosReporte.practiceDetails) {
      var columna = 60
      var columna1 = 90
      var columna2 = 120
      var columna3 = 145
      
      var columna5 = 285
      var fila = -105
      var filaHora = -115
      var filaTexto =-130
      
      var b = 0

      datosReporte.practiceDetails.forEach(detail => {
        if(b>3&&b<9){
          pdf.setFontSize(10);
          pdf.text(detail.currentDate.toString(), columna, (fila + (80 * b)), null, 90);
          pdf.text(detail.startTime.toString(), columna1, (fila + (80 * b)), null, 90);
          pdf.text(detail.endTime.toString(), columna2, (fila + (80 * b)), null, 90);
          pdf.text(detail.totalHours.toString(), columna3, (filaHora + (80 * b)));
          pdf.setFontSize(8);
          detail.observations && 
          pdf.text(detail.observations.toString(), columna5, (filaTexto + (80 * b)))
        }
          b++ 
 
      })
      
      
    }
    pdf.addPage('a4');
    this.image = imagen.pagina3
    pdf.addImage(this.image, 'PNG', 5, 5, 435, 620);
    if (datosReporte.practiceDetails) {
      var columna = 60
      var columna1 = 90
      var columna2 = 120
      var columna3 = 145
      
      var columna5 = 285
      var fila = -500
      var filaHora = -515
      var filaTexto =-530
      
      var b = 0

      datosReporte.practiceDetails.forEach(detail => {
        if(b>8&&b<13){
          pdf.setFontSize(10);
          pdf.text(detail.currentDate.toString(), columna, (fila + (75 * b)), null, 90);
          pdf.text(detail.startTime.toString(), columna1, (fila + (75 * b)), null, 90);
          pdf.text(detail.endTime.toString(), columna2, (fila + (75 * b)), null, 90);
          pdf.text(detail.totalHours.toString(), columna3, (filaHora + (75* b)));
          pdf.setFontSize(8);
          detail.observations && 
          pdf.text(detail.observations.toString(), columna5, (filaTexto + (75 * b)))
        }
          b++ 
 
      })
      
      
    }




    pdf.save('example.pdf');
  }
}