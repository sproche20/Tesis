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
  selector: 'app-select-activity',
  templateUrl: './select-activity.component.html',
  styleUrls: ['./select-activity.component.scss'],
})
export class SelectActivityComponent implements OnInit {
  foro9:for9[]=[];
  practiceDetailId:any;
  act:'';
  activitiesId:number=null;
  detailId:number=null;
  acti:any;
  Software:software[]=[];
  actDetail:Actdetail[]=[];
  formulario9:for9[]=[];
  activitieDetailId=1;
  Id:any;
  Ids:any;
  actualDate:Date;
  finalId:number;
  student:any;
  constructor(
    private menu:MenuController,
    public popoverController: PopoverController,
    private interaction:InteractionService,
    private actividaddetailService:actdetailService,
    private softwareService:SoftwareService,
    private exampleService:ExampleService,
    private formato9:formulario9Service,
    private route:ActivatedRoute,
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private auth:AuthService,
  ) { }

  ngOnInit() {
        this.cargarActividad();
    this.cargarDatos();
    this.Id=this.route.snapshot.paramMap.get("id");
    this.finalId=this.Id;
    this.detailId=this.Id;
    this.Ids=this.student;
    const id = this.activatedRoute.snapshot.params.id;
    this.formato9.listPracticas(id).subscribe(
      data=>{
      console.log("Res",data)
      this.foro9=data;
      this.student=this.foro9[this.finalId].id;
      console.log("Id Actividades",this.student);
      

      this.Ids=this.student;
      },
      err=>{
        console.log(err);
      }
    )
  }
  crearActividad():void{
    const actdetail=new Actdetail (this.act,this.detailId,this.activitiesId);
    this.actividaddetailService.save(actdetail).subscribe();
    console.log(actdetail);
    if(actdetail){
      this.interaction.presentToast('registro exitoso');
      this.cargarDatos();
    }
  }
  cargarActividad():void{
    this.softwareService.lista().subscribe(
      data=>{
        this.Software=data;
      },
      err=>{
        console.log(err);
      }
    )
  }
  inicio(){
    this.router.navigate(['/listformulario',this.Ids])

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

  borrarActividad(id: number) {
    this.actividaddetailService.delete(id).subscribe(
      data => {
        console.log(data);
        console.log("borrado exitoso");
        this.cargarDatos();    
      },
    );
  } 
  logout(){
    this.auth.logout();
    this.interaction.presentToast("sesion finalizada");
    this.router.navigate(['/login'])

  }
  isModalOpen5 = false;
  setOpen5(isOpen: boolean) {
    this.isModalOpen5 = isOpen;
  }



  

  

}
