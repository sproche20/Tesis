import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController, PopoverController } from '@ionic/angular';
import { Actdetail } from '../../models/actdetail';
import { for9 } from '../../models/for9';
import { software } from '../../models/software';
import { actdetailService } from '../../service/actdetail.service';
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
  constructor(
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
    this.cargarActividad();
    this.cargarDatos();
    console.log(this.cargarDatos)
  }
  openMenu(){
    this.menu.open();
  }

  crearActividad():void{
    const actdetail=new Actdetail (this.act,this.detailId,this.activitiesId);
    this.actividaddetailService.save(actdetail).subscribe();
    console.log(actdetail);
    if(actdetail){
      this.interaction.presentToast('registro exitoso');
      this.cargarActividad();
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
    this.router.navigate(['/inicioEstudiante',this.Ids])

  }
   cargarDatos():void{
    const id = this.route.snapshot.params.id;
    this.actividaddetailService.listActividad(id).subscribe(
      data=>{
        this.actDetail=data;
        console.log("numero de actividades:",this.actDetail)
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
  actividades(){
    this.acti=this.actDetail
    console.log("lista unida",this.acti)
    
  }



  

  

}
