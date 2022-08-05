import { Docente } from './../../User/models/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, PopoverController } from '@ionic/angular';
import { AuthService } from 'src/app/User/service/auth.service';
import { FirestoreService } from 'src/app/User/service/firestore.service';
import { InteractionService } from 'src/app/User/service/interaction.service';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.scss'],
})
export class InicialComponent implements OnInit {
  

  constructor(
    public popoverController: PopoverController,
    private firestore: FirestoreService,
    private interaction: InteractionService ,
    public firestorageService:FirestoreService,
    private auth:AuthService,
    private router:Router
  ) {
    this.auth.stateUuser().subscribe(res=>{
      if(res){
        console.log('bienvenido');
        this.login=true ;
        this.getDatosDocente(res.uid)
      }else{
        console.log('no esta logeado');
        this.login=false;
      }
    })

    


   }

  ngOnInit() {}

  logout(){
    this.auth.logout();
    this.interaction.presentToast("sesion finalizada");
    this.router.navigate(['/loginteacher'])
  
  }
  loginApp() {
    this.login = true;
}
  
  
  /**roles----------------------------------------------------- */
  
  login:boolean=false;
  rol: 'visitante' | 'admin' = null;

  

  getDatosDocente(uid:string){
    const path='Docentes';
    const id=uid;
    this.firestore.getDoc<Docente>(path,id).subscribe(res=>{
      console.log('datos->',res);
    if (res){
      this.rol=res.perfil;
    }

  })

}
}
