import { SoftwareService } from './../../User/service/software.service';
import { software } from './../../User/models/software';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverController, MenuController } from '@ionic/angular';
import { InteractionService } from 'src/app/User/service/interaction.service';
import { AuthService } from 'src/app/User/service/auth.service';
import { Teacher } from 'src/app/User/models/teacher';
import { TeacherService } from 'src/app/User/service/teacher.service';
import { carrera } from 'src/app/User/models/carrera';
import { CarreraService } from './../../User/service/carrera.service';
@Component({
  selector: 'app-actividades-software',
  templateUrl: './actividades-software.component.html',
  styleUrls: ['./actividades-software.component.scss'],
})
export class ActividadesSoftwareComponent implements OnInit {
  activities:'';
  observacion:'';
  career:number=null;
  Software:software[]=[];
  teacher:Teacher[]=[];
  carreras:carrera[]=[];
  Id:any;   
  textoBuscar='';
   



  constructor(public popoverController: PopoverController,
    private softwareService:SoftwareService,
    private interaction: InteractionService ,
    private menu: MenuController,
    private auth:AuthService,
    private teacherService:TeacherService,
    private CarreraService:CarreraService,
    private route:ActivatedRoute,



    private router:Router) {
        this.menu.enable(false);
     }

  ngOnInit() {
    this.cargarActividad();
    this.cargarTeacher();
    this.cargarCarrera();
    this.Id=this.route.snapshot.paramMap.get("id");

  }

  onCreate():void{
    const actividad=new software(this.activities,this.career,this.observacion);
    this.softwareService.save(actividad).subscribe();
    if(actividad){
      this.interaction.presentToast('registro exitoso');
      this.router.navigate(['/actsoftware'])
    }
    
  }
  cargarActividad():void{
    this.softwareService.lista().subscribe(
      data=>{
        this.Software=data;
        this.cargarActividad();  
      },
      err=>{
        console.log(err);
      }
    )
  }
  borrarActividad(id: number) {
    this.softwareService.delete(id).subscribe(
      data => {
        console.log(data);
        console.log("borrado exitoso");
        this.cargarActividad();    
      },
    );
  } 

  cargarTeacher():void{
    this.teacherService.lista().subscribe(
      data=>{
        this.teacher=data;
      },
      err=>{
        console.log(err);
      }
    )
  }
  cargarCarrera():void{
    this.CarreraService.lista().subscribe(
      data=>{
        this.carreras=data;
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
  busqueda(event){
    const textos=event.target.value;
    this.textoBuscar=textos;
  }
  
  
  /**roles----------------------------------------------------- */
  
  login:boolean=false;
  rol: 'visitante' | 'admin' = null;

}
