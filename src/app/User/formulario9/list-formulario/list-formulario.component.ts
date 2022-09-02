import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController, ModalController, PopoverController } from '@ionic/angular';
import { for9 } from '../../models/for9';
import { actdetailService } from '../../service/actdetail.service';
import { for9Service } from '../../service/for9.service';
import { formulario9Service } from '../../service/formulario9.service';
import { InteractionService } from '../../service/interaction.service';

@Component({
  selector: 'app-list-formulario',
  templateUrl: './list-formulario.component.html',
  styleUrls: ['./list-formulario.component.scss'],
})
export class ListFormularioComponent implements OnInit {
  foro9:for9[]=[];
  practiceDetailId:any;
  fecha:any

  Id:any;
  Ids:any;
  actualDate:Date;
  finalId:number;
  constructor(
    public popoverController: PopoverController,
    private interaction: InteractionService ,
    private menu: MenuController,
    private for9Service:for9Service,
    private formato9:formulario9Service,
    private router:Router,
    private route:ActivatedRoute,
    private activatedRoute: ActivatedRoute,
    public modalController:ModalController,
    private actividaddetailService:actdetailService,    
  ) { 

    
  }

  ngOnInit() {

    this.cargarRegistro();
    this.Id=this.route.snapshot.paramMap.get("id");
    this.finalId=this.Id-1;
    const id = this.activatedRoute.snapshot.params.id;
    this.formato9.listPracticas(id).subscribe(
      data=>{
        this.foro9=data;
        this.actualDate=this.foro9[this.finalId].actualDate;
        this.fecha=this.actualDate
        console.log("fechas:",this.fecha)
      },
      err=>{
        console.log(err);
      }
    )
    
  }
  openMenu(){
    this.menu.open();
  }
  cargarRegistro():void{
    this.Id=this.route.snapshot.paramMap.get("id");
    this.finalId=this.Id-1;
    const id = this.activatedRoute.snapshot.params.id;
    this.formato9.listPracticas(id).subscribe(
      data=>{
        this.foro9=data;
        this.actualDate=this.foro9[this.finalId].actualDate;
        console.log("fechas2:",this.actualDate)


      },
      err=>{
        console.log(err);
      }
    )
  }
  inicio(){
    this.router.navigate(['/inicioEstudiante',this.Ids])



  }

  pdf(){

    let fechaCompleta=this.actualDate.toString().substr(0,4) +this.actualDate.toString().substr(5,2)+this.actualDate.toString().substr(8,2)
    console.log(fechaCompleta)
  }

}
