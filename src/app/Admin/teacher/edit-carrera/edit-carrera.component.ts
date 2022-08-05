import { carrera } from './../../../User/models/carrera';
import { CarreraService } from 'src/app/User/service/carrera.service';
import { MenuController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-carrera',
  templateUrl: './edit-carrera.component.html',
  styleUrls: ['./edit-carrera.component.scss'],
})
export class EditCarreraComponent implements OnInit {
carrera:carrera=null;
  constructor(
    private router:Router,
    private menu:MenuController,
    private activatedRoute: ActivatedRoute,
    private carreraService:CarreraService
  ) {this.menu.enable(false); }

  ngOnInit() {

    const id = this.activatedRoute.snapshot.params.id;
    this.carreraService.detail(id).subscribe(
      data => {
        this.carrera = data;
      },
      err => {
        this.router.navigate(['/']);
      }
    );
  }
  onUpdate(){
    const id = this.activatedRoute.snapshot.params.id;
    this.carreraService.update(this.carrera).subscribe(
      data => {
        this.router.navigate(['/profesor']);
      },
      err => {
      }
    );
  }

}
