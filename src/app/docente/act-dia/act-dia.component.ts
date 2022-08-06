import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PopoverController, MenuController, ModalController } from '@ionic/angular';
import { Actdetail } from 'src/app/User/models/actdetail';
import { for9 } from 'src/app/User/models/for9';
import { actdetailService } from 'src/app/User/service/actdetail.service';
import { AuthService } from 'src/app/User/service/auth.service';
import { formulario9Service } from 'src/app/User/service/formulario9.service';
import { InteractionService } from 'src/app/User/service/interaction.service';

@Component({
  selector: 'app-act-dia',
  templateUrl: './act-dia.component.html',
  styleUrls: ['./act-dia.component.scss'],
})
export class ActDiaComponent implements OnInit {
  isModalOpen = false;
  foro9:for9[]=[];
  actDetail:Actdetail[]=[];


  practiceDetailId:any;
  activitiesId:number=null;
  detailId:number=null;
  activitieDetailId=1;
  Id:any;
  Ids:any;
  actualDate:Date;
  finalId:number;

  constructor(
    private auth:AuthService,
    public popoverController: PopoverController,
    private interaction: InteractionService ,
    private menu: MenuController,
    private formato9:formulario9Service,
    private router:Router,
    private route:ActivatedRoute,
    private activatedRoute: ActivatedRoute,
    public modalController:ModalController,
    private actividaddetailService:actdetailService,
  ) { }

  ngOnInit() {
    this.cargarRegistro();
    this.cargarDatos();
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
  
  cargarDatos():void{
    const id = this.route.snapshot.params.id;
    this.actividaddetailService.listActividad(id).subscribe(
      data=>{
        this.actDetail=data;
      },
      err=>{
        console.log(err);
      }
    )
  }

  logout(){
    this.auth.logout();
    this.interaction.presentToast("sesion finalizada");
    this.router.navigate(['/loginteacher'])
  
  }
  /*----------------modal-*/
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  

}
