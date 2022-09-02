import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PopoverController, MenuController, ModalController } from '@ionic/angular';
import { PracticeReportDto } from '../models/Dtos/PracticeReportDto';
import { formato9 } from '../models/formulario9';
import { for9Service } from '../service/for9.service';


@Component({
  selector: 'app-fechas',
  templateUrl: './fechas.component.html',
  styleUrls: ['./fechas.component.scss'],
})
export class FechasComponent implements OnInit {
  fomula9:PracticeReportDto[]=[];

  constructor(
    public popoverController: PopoverController,
    private menu: MenuController,
    private router:Router,
    private for9Service:for9Service,
    private route:ActivatedRoute,
    private activatedRoute: ActivatedRoute,
    public modalController:ModalController,
    
  ) { }

  ngOnInit() {}
  cargarFechas():void{
    const id = this.activatedRoute.snapshot.params.id;
    const startDate= this.activatedRoute.snapshot.params.startDate;
    const endDate = this.activatedRoute.snapshot.params.endDate;
    this.for9Service.listPracticasFechas(id,startDate,endDate).subscribe(
      data=>{
     
      },
      err=>{
        console.log(err)
      }
    )

  }

}
