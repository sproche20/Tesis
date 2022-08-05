import { AuthService } from './../service/auth.service';
import { InteractionService } from './../service/interaction.service';
import { FirestoreService } from './../service/firestore.service';
import { EstudianteService } from './../service/estudiante.service';
import { Estudiante } from './../models/estudiante';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import {user} from '../models/user'

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss'],
})
export class DatosComponent implements OnInit {
  /**Datos Firebase */
  datos: user ={
    nombre:null,
    apellido:null,
    correo:null,
    uid:null,
    password:null,
    perfil:'visitante'
  }
  /**Datos Spring BOOT Y KOTLIN  */
  nui='';
  name='';
  lastname= '';
  email= '';
  phone= ''
  estudiantes:Estudiante[]=[];
  

  constructor(private menu: MenuController,
    public popoverController: PopoverController,
    private studentService:EstudianteService,
    private firestore:FirestoreService,
    private interaction:InteractionService ,
    private auth:AuthService,
    private router:Router
    ) { this.menu.enable(false);}
    

  ngOnInit() {
    this.cargarEstudiante();
    
  }

  /**crear estudiante FIREBASE */
  async registrar(){
    this.interaction.presentLoading('registrando...')
    console.log('datos -> ',this.datos)
     const res= await this.auth.registroUser(this.datos).catch(error=>{
      this.interaction.closeLoading();
      this.interaction.presentToast('error')
      console.log("error");
    })
    if (res){
      console.log('usuario registrado');
      const path='Usuarios';
      const id= res.user.uid;
      this.datos.uid=id;
      this.datos.password=null
      await this.firestore.createDoc(this.datos,path,id).catch
      this.interaction.closeLoading();
      this.interaction.presentToast('registro exitoso');
      
      this.router.navigate(['/datos']);
    }
  }
  /**crear estudiante Spring BOOT Y KOTLIN  */

  onCreate(): void{
    const estudiante=new Estudiante(this.nui,this.name,this.lastname,this.email,this.phone);
    this.studentService.save(estudiante).subscribe(
    );
    this.router.navigate(['/datos']);
  }
  /**tabla ------------------------------- */
  cargarEstudiante():void{
    this.studentService.lista().subscribe(
      data=>{
        this.estudiantes=data;
      },
      err=>{
        console.log(err);
      }
    )

  }
  borrarEstudiante(id: number) {
    this.studentService.delete(id).subscribe(
      data => {
        console.log(data);
        console.log("borrado exitoso");
        this.cargarEstudiante();    
      },
    );
  }
  
  logout(){
    this.auth.logout();
    this.interaction.presentToast("sesion finalizada");
    this.router.navigate(['/loginteacher'])

  }

}
