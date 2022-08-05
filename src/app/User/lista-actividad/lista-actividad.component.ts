import { Actdetail } from './../models/actdetail';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { actdetailService } from '../service/actdetail.service';

@Component({
  selector: 'app-lista-actividad',
  templateUrl: './lista-actividad.component.html',
  styleUrls: ['./lista-actividad.component.scss'],
})
export class ListaActividadComponent implements OnInit {
actdetail:Actdetail[]=[]
  constructor(
    private menu: MenuController,
    private actividaddetailService:actdetailService,

  ) { }

  ngOnInit() {
    this.cargarActividad();
  }
  openMenu(){
    this.menu.open();
  }
  cargarActividad():void{
    this.actividaddetailService.lista().subscribe(
      data=>{
        this.actdetail=data;
      },
      err=>{
        console.log(err);
      }
    )
    
  }
  borrarActividad(id:number){
    this.actividaddetailService.delete(id).subscribe(
      data=>{
         console.log(data);
         console.log("borrado exitoso");
         this.cargarActividad();
      }
    )
  }



}
