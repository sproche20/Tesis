import { ConvenioService } from './../../User/service/convenio.service';
import { Component, OnInit } from '@angular/core';
import {Convenios} from 'src/app/User/models/convenios'

@Component({
  selector: 'app-convenio',
  templateUrl: './convenio.component.html',
  styleUrls: ['./convenio.component.scss'],
})
export class ConvenioComponent implements OnInit {
  convenios:Convenios[]=[];

  constructor(
    private convenioService:ConvenioService
  ) { }

  ngOnInit() {}
  cargarConvenio():void{
    this.convenioService.lista().subscribe(
      data=>{
        this.convenios=data;
      },
      err=>{
        console.log(err);
      }
    )
  }

}
