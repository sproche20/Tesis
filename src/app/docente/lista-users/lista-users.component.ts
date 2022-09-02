import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, PopoverController } from '@ionic/angular';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { Estudiante } from 'src/app/User/models/estudiante';
import { AuthService } from 'src/app/User/service/auth.service';
import { EstudianteService } from 'src/app/User/service/estudiante.service';
import { FirestoreService } from 'src/app/User/service/firestore.service';
import { InteractionService } from 'src/app/User/service/interaction.service';

@Component({
  selector: 'app-lista-users',
  templateUrl: './lista-users.component.html',
  styleUrls: ['./lista-users.component.scss'],
})
export class ListaUsersComponent implements OnInit {
  nui='';
  name='';
  lastname= '';
  email= '';
  phone= ''
  estudiantes:Estudiante[]=[];
    textoBuscar='';
    constructor(private menu: MenuController,
      public pipe:PipesModule,
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
  busqueda(event){
    const textos=event.target.value;
    this.textoBuscar=textos;
  }
  logout(){
    this.auth.logout();
    this.interaction.presentToast("sesion finalizada");
    this.router.navigate(['/loginteacher'])
  
  }
  
  
  /**roles----------------------------------------------------- */
  
  login:boolean=false;
  rol: 'visitante' | 'admin' = null;

}
