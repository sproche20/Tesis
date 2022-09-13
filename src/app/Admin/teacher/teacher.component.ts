import { Docente } from './../../User/models/user';
import { Teacher } from './../../User/models/teacher';
import { Router } from '@angular/router';
import { TeacherService } from './../../User/service/teacher.service';
import { Component, OnInit } from '@angular/core';
import { CarreraService } from './../../User/service/carrera.service';
import { carrera } from 'src/app/User/models/carrera';

import { PopoverController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { InteractionService } from 'src/app/User/service/interaction.service'
import { FirestoreService } from 'src/app/User/service/firestore.service';
import { AuthService } from 'src/app/User/service/auth.service';
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss'],
})
export class TeacherComponent implements OnInit {
  datos:Docente={
    nombre:null,
    correo:null,
    uid:null,
    password:null,
    perfil:'visitante'  
  }

  enableNewUser=false;
  names='';
  email= '';
  phone= '';
  teacher:Teacher[]=[];
  textoBuscar='';

  name:'';
  coordinator:'';
  teacherId:number=null;
  carreras:carrera[]=[];

  constructor(public popoverController: PopoverController,
    private teacherService:TeacherService,
    private interaction: InteractionService ,
    private menu: MenuController,
    private CarreraService:CarreraService,
    private firestore:FirestoreService,
    private auth:AuthService,
    private router:Router) {
        this.menu.enable(false);
     }
  ngOnInit() {
    this.cargarTeacher();
    this.cargarCarrera();

  }

  /**crear usuario------------------------------------------- */
  onCreate():void{
    const teacher=new Teacher(this.name,this.phone);
    this.teacherService.save(teacher).subscribe();
    if(teacher){
      this.interaction.presentToast('registro exitoso');
      this.router.navigate(['/profesor'])
    }
    
  }
  /**crear Carrera------------------------------------------- */
    onCreateC():void{
      const carreras=new carrera(this.name,this.coordinator,this.teacherId);
      this.CarreraService.save(carreras).subscribe();
      if(carreras){
        this.interaction.presentToast('registro exitoso');
        this.router.navigate(['/profesor'])
      }
      
    }

  /**tabla profesor------------------------------------------- */
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
  /**tabla Carrera------------------------------------------- */
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
    /**borrar profesor------------------------------------------- */
    borrarProfesor(id: number) {
      this.teacherService.delete(id).subscribe(
        data => {
          console.log(data);
          console.log("borrado exitoso");
          this.cargarTeacher();    
        },
      );
    } 
     /**borrar Carrera------------------------------------------- */
     borrarCarrera(id: number) {
      this.CarreraService.delete(id).subscribe(
        data => {
          console.log(data);
          console.log("borrado exitoso");
          this.cargarCarrera();    
        },
      );
    }

    //crear Docente FIREBASE ------------------------------------------------------
    async registrar(){
      this.interaction.presentLoading('registrando...')
      console.log('datos -> ',this.datos)
       const res= await this.auth.registroDocente(this.datos).catch(error=>{
        this.interaction.closeLoading();
        this.interaction.presentToast('error')
        console.log("error");
      })
      if (res){
        console.log('usuario registrado');
        const path='Docentes';
        const id= res.user.uid;
        this.datos.uid=id;
        this.datos.password=null
        await this.firestore.createDoc(this.datos,path,id).catch
        this.interaction.closeLoading();
        this.interaction.presentToast('registro exitoso');
        
        this.router.navigate(['/loginteacher']);
      }
    }
    logout(){
      this.auth.logout();
      this.interaction.presentToast("sesion finalizada");
      this.router.navigate(['/loginteacher'])
  
    }
    /*-----busqueda-**/
busqueda(event){
  const texto=event.target.value;
  this.textoBuscar=texto;
}
    

  
  

}
