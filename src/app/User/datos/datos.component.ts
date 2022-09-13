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
import { CarreraService } from './../../User/service/carrera.service';
import { carrera } from '../models/carrera';


@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss'],
})
export class DatosComponent implements OnInit {
  isModalOpen = false;
  private path='Usuarios'
  enableNewUser=false;

  /**Datos Firebase */
  datos: user ={
    nombre:null,
    apellido:null,
    correo:null,
    uid:null,
    Ide:null,
    password:null,
    perfil:'visitante'

  }
  /**Datos Spring BOOT Y KOTLIN  */
  nui='';
  name='';
  lastname= '';
  email= '';
  phone= '';
  careerId:number=null;
  estudiantes:Estudiante[]=[];
  estudi:Estudiante;
  carreras:carrera[]=[];
  student:user[]=[];
  newStudent:user;
  textoBuscar='';


  

  constructor(private menu: MenuController,
    public popoverController: PopoverController,
    private studentService:EstudianteService,
    private firestore:FirestoreService,
    private interaction:InteractionService ,
    private auth:AuthService,
    private router:Router,
    private CarreraService:CarreraService,

    ) { this.menu.enable(false);}
    

  ngOnInit() {
    this.cargarEstudiante();
    this.cargarCarrera();
    this.getStudent();

    
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
//editar estudiante firebase----------------------------------
  getStudent(){
    const path='Usuarios';
    this.firestore.getCollection<user>(this.path).subscribe( res=>{
      this.student=res;
    })

  }
  deleteStudent(usuario:user){
    this.firestore.deleteDoc(this.path,usuario.uid)
  }



  /**crear estudiante Spring BOOT Y KOTLIN  */

  onCreate(): void{
    const estudiante=new Estudiante(this.nui,this.name,this.lastname,this.email,this.phone,this.careerId);
    this.studentService.save(estudiante).subscribe(
    );
    if(estudiante){
      this.interaction.presentToast('registro exitoso');
      this.router.navigate(['/datos']);
    }
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
    this.router.navigate(['/loginteacher']);
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
  busqueda(event){
    const textos=event.target.value;
    this.textoBuscar=textos;
  }
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }





}