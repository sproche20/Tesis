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
  activitieDetailId = 1;
  Id: any;
  actualDate: Date;
  finalId: number;
  image: any;

  //**---------------------------actividad seleccionar------------------------------- */

  constructor(
    public navCtrl: NavController,
    public popoverController: PopoverController,
    private interaction: InteractionService,
    private menu: MenuController,
    private for9Service: for9Service,
    private formato9: formulario9Service,
    private router: Router,

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
    this.Id = this.activatedRoute.snapshot.paramMap.get(this.Id);
    this.formato9.lista().subscribe((data) => {
      console.log('Res', data);
      this.foro9 = data;
      this.Id = this.foro9[this.finalId].id;
      console.log('Id del estudiante', this.Id);
    });
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
  async loadImage(url) {
    return new Promise((resolve) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.responseType = 'blob';
      xhr.onload = function (e) {
        const reader = new FileReader();
        reader.onload = function (event) {
          const res = event.target.result;
          resolve(res);
        };
        const file = this.response;
        reader.readAsDataURL(file);
      };
      xhr.send();
    });
  }


  
  async generatePDF() {
    var Image = await this.loadImage('../inicio/formulario.jpg');
    this.image = Image;
    const pdf = new jsPDF('p', 'pt', 'letter');
    pdf.addImage(this.image, 'JPEG', 0, 0, 565, 792);
    pdf.save('example.pdf');
  }

  async generatePDF1() {
    var Image = await this.loadImage('../inicio/fondo.jpg');
    this.image = Image;
    console.log(this.image);
    const pdf = new jsPDF({ unit: 'px', format: 'a4' });
    pdf.addImage(this.image, 'JPEG', 20, 20, 400, 150);
    pdf.save('example.pdf');
  }
}
