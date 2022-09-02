import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController, PopoverController } from '@ionic/angular';
import { Actdetail } from '../../models/actdetail';
import { for9 } from '../../models/for9';
import { software } from '../../models/software';
import { actdetailService } from '../../service/actdetail.service';
import { AuthService } from '../../service/auth.service';
import { ExampleService } from '../../service/example.service';
import { formulario9Service } from '../../service/formulario9.service';
import { InteractionService } from '../../service/interaction.service';
import { SoftwareService } from '../../service/software.service';

@Component({
  selector: 'app-actividadd',
  templateUrl: './actividadd.component.html',
  styleUrls: ['./actividadd.component.scss'],
})
export class ActividaddComponent implements OnInit {
  foro9:for9[]=[];
  practiceDetailId:any;
  activitiesId:number=null;
  detailId:number=null;
  Software:software[]=[];
  actDetail:Actdetail[]=[];
  formulario9:for9[]=[];
  activitieDetailId=1;
  Id:any;
  Ids:any;
  actualDate:Date;
  finalId:number;
  constructor(

    private auth:AuthService,
    private menu:MenuController,
    public popoverController: PopoverController,
    private interaction:InteractionService,
    private actividaddetailService:actdetailService,
    private softwareService:SoftwareService,
    private exampleService:ExampleService,
    private formato9:formulario9Service,
    private route:ActivatedRoute,

    private router:Router
  ) { }

  ngOnInit() {
    this.Id=this.route.snapshot.paramMap.get("id");
    this.finalId=this.Id-1;
    this.detailId=this.Id
    this.formato9.lista().subscribe(data=>{
      console.log("Res",data)
      this.foro9=data;
      this.actualDate=this.foro9[this.finalId].actualDate;
      console.log("fecha del estudiante",this.actualDate);
      this.Ids=this.foro9[this.finalId].student;
      console.log("Id del estudiante",this.Ids);

      


    })
    this.cargarDatos();
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
  listas(){
    this.router.navigate(['/listas',this.Ids])

  }

}
