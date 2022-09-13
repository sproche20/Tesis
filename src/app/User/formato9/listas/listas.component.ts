import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PopoverController, MenuController, ModalController } from '@ionic/angular';
import { for9 } from '../../models/for9';
import { actdetailService } from '../../service/actdetail.service';
import { formulario9Service } from '../../service/formulario9.service';
import { InteractionService } from '../../service/interaction.service';
import { for9Service } from '../../service/for9.service';
import { AuthService } from '../../service/auth.service';


@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
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
    private auth:AuthService,
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
  logout(){
    this.auth.logout();
    this.interaction.presentToast("sesion finalizada");
    this.router.navigate(['/loginteacher'])
  
  }
  borrarDatos(id:number) {
    this.formato9.delete(id).subscribe(
      data => {
        console.log(data);
        console.log("borrado exitoso");
       this.cargarRegistro();   
      },
    );
  }
}
