import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PopoverController, MenuController } from '@ionic/angular';
import { Estudiante } from '../../models/estudiante';
import { user } from '../../models/user';
import { AuthService } from '../../service/auth.service';
import { EstudianteService } from '../../service/estudiante.service';
import { FirestoreService } from '../../service/firestore.service';
import { InteractionService } from '../../service/interaction.service';

@Component({
  selector: 'app-crear-firebase',
  templateUrl: './crear-firebase.component.html',
  styleUrls: ['./crear-firebase.component.scss'],
})
export class CrearFirebaseComponent implements OnInit {
  datos: user ={
    nombre:null,
    apellido:null,
    correo:null,
    uid:null,
    Ide:null,
    password:null,
    perfil:'visitante'

  }
  finalId:number;
  names:any;
  Id:any;
  estudiante:Estudiante[]=[];
  constructor(
    public popoverController: PopoverController,
    private router:Router,
    private menu:MenuController,
    private activatedRoute: ActivatedRoute,
    private estudianteService: EstudianteService,
    private interaction:InteractionService ,
    private auth:AuthService,
    private firestore:FirestoreService,
  )  {this.menu.enable(false); }
  ngOnInit() {
    this.Id=this.activatedRoute.snapshot.paramMap.get("id");

      this.finalId=this.Id-1;
      this.estudianteService.lista().subscribe(
        data => {
          console.log("Res",data)
          this.estudiante = data;
          this.datos.Ide=this.estudiante[this.finalId].id;
          console.log('Ide',this.datos.Ide)
          this.datos.nombre=this.estudiante[this.finalId].name;
          console.log('nombre',this.datos.nombre)
          this.datos.apellido=this.estudiante[this.finalId].lastname;
          console.log('apellidos',this.datos.apellido)
          this.datos.correo=this.estudiante[this.finalId].email;
          console.log('Correo',this.datos.correo)


        },
      );
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
      
      this.router.navigate(['/login']);
    }
  }

}
