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

window.addEventListener('load', async () => {
  const canvas = document.querySelector('canvas');
  canvas.height = canvas.offsetHeight;
  canvas.width = canvas.offsetWidth;
  const form = document.querySelector('#form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });
});

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
  //**---------------------------actividad seleccionar------------------------------- */
  //**---------------------------actividad seleccionar------------------------------- */
  practiceDetailId: any;
  activitiesId: number = null;
  detailId: number = null;
  Software: software[] = [];
  formulario9: for9[] = [];
  estudiantes:Estudiante[]=[];
  activitieDetailId = 1;
  Id: any;
  Ids:any;
  tutor:any
  actualDate: Date;
  finalId: number;
  image: any;
  carrera:any;

  //**---------------------------actividad seleccionar------------------------------- */

  constructor(
    public navCtrl: NavController,
    public popoverController: PopoverController,
    private interaction: InteractionService,
    private menu: MenuController,
    private for9Service: for9Service,
    private formato9: formulario9Service,
    private router: Router,

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
    this.cargarActividad();
    this.cargarAct();
    this.Id=this.activatedRoute.snapshot.paramMap.get("id");
    this.finalId=this.Id-1;
      this.studentService.lista().subscribe(
        data=>{
          this.estudiantes=data;
          this.carrera.this.estudiante[this.finalId]
        },
        err=>{
          console.log(err);
        }
      )
  

    const id = this.activatedRoute.snapshot.params.id;
    this.for9Service.listPracticasEstudiante(id).subscribe(
      (data) => {
        this.formulary = data;
        this.tutor = this.formulary[this.finalId].tutorId;
        console.log('Id del estudiante', this.tutor);
      },
      (err) => {
        console.log(err);
      }
    );
    this.Ids=id
    
   
  }
  generarPDF() {
    var doc = new jsPDF();
    doc.text('hola mundo', 10, 10);
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

  //**---------------------------Prueba actividad seleccionar---------------------------- */
  //**---------------------------Prueba actividad seleccionar------------------------------- */

  crearActividad(): void {
    const actdetail = new Actdetail(this.activitiesId, this.detailId);
    this.actividaddetailService.save(actdetail).subscribe();
    console.log(actdetail);
    if (actdetail) {
      this.interaction.presentToast('registro exitoso');
    }
  }
  cargarActividad(): void {
    this.softwareService.lista().subscribe(
      (data) => {
        this.Software = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  cargarAct(): void {
    this.actividaddetailService.lista().subscribe(
      (data) => {
        this.actDetail = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  generatePDF() {
    this.studentService.cargarReporte(this.Ids, this.tutor).subscribe((resp) => {
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
