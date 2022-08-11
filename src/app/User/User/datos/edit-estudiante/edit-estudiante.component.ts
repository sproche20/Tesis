import { EstudianteService } from './../../service/estudiante.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PopoverController, MenuController } from '@ionic/angular';
import { Estudiante } from './../../models/estudiante';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-estudiante',
  templateUrl: './edit-estudiante.component.html',
  styleUrls: ['./edit-estudiante.component.scss'],
})
export class EditEstudianteComponent implements OnInit {
  estudiante:Estudiante=null;
  constructor(
    public popoverController: PopoverController,
    private router:Router,
    private menu:MenuController,
    private activatedRoute: ActivatedRoute,
    private estudianteService: EstudianteService


  )  {this.menu.enable(false); }

  ngOnInit() {

    const id = this.activatedRoute.snapshot.params.id;
    this.estudianteService.detail(id).subscribe(
      data => {
        this.estudiante = data;
      },
      err => {
        this.router.navigate(['/']);
      }
    );
  }
  onUpdate(){
    const id = this.activatedRoute.snapshot.params.id;
    this.estudianteService.update(this.estudiante).subscribe(
      data => {
        this.router.navigate(['/profesor']);
      },
      err => {
      }
    );
  }

}
