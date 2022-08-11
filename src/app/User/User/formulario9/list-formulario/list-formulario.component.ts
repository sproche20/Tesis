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
  activitiesId:number=null;
  detailId:number=null;
  activitieDetailId=1;
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
  }
  openMenu(){
    this.menu.open();
  }
  cargarRegistro():void{
    const id = this.activatedRoute.snapshot.params.id;
    this.formato9.listPracticas(id).subscribe(
      data=>{
        this.foro9=data;
      },
      err=>{
        console.log(err);
      }
    )
  }
  inicio(){
    this.router.navigate(['/inicioEstudiante',this.Ids])



  }

}
