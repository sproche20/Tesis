import { user, Docente } from './User/models/user';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { AuthService } from './User/service/auth.service';
import { InteractionService } from './User/service/interaction.service';
import { FirestoreService } from './User/service/firestore.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  login:boolean=false;
  rol: 'visitante' | 'admin' = null;
  img:string;
  constructor(
    public popoverController: PopoverController,
    private interaction: InteractionService ,
    private auth:AuthService,
    private firestore: FirestoreService,
    private router:Router
  ) {

    /*this.auth.stateUuser().subscribe(res=>{
      if(res){
        console.log('bienvenido');
        this.login=true ;
        this.getDatosUser(res.uid)
      }else{
        console.log('no esta logeado');
        this.login=false;
      }
    })
  }*/



  /*getDatosUser(uid:string){
    const path='Usuarios';
    const id=uid;
    this.firestore.getDoc<user>(path,id).subscribe(res=>{
      console.log('datos->',res);
      if (res){
        this.rol=res.perfil;
      }
    })
  }*/
  /*logout(){
    this.auth.logout();
    this.interaction.presentToast("sesion finalizada");
    this.router.navigate(['/login'])

  }
  loginApp() {
    this.login = true;
}*/
}
}
