import { user } from './../models/user';
import { FirestoreService } from './../service/firestore.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { InteractionService } from '../service/interaction.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  
  uid:string=null;
  info:user=null;

  constructor(private auth:AuthService,
    private router: Router,
    private interaction: InteractionService,
    private firestore:FirestoreService,
    private menu: MenuController,) {
      this.menu.enable(false);
   }

  async ngOnInit() {
    console.log("estoy en linea");
    this.auth.stateUuser().subscribe(res =>{
      console.log('en perfil estado autenticacion->',res);
      this.getUid();
    })
   
  }
  async getUid(){
    const uid=await this.auth.getUid();
    if(uid){
      this.uid = uid;
      console.log('uid->',this.uid);
      this.getInfoUser()
    }else{
      console.log('no existe UID')
    }
  }
  getInfoUser(){
    const path='Usuarios';
    const id=this.uid;  
    this.firestore.getDoc<user>(path,id).subscribe(res=>{
      if(res){
        this.info=res;
      }
    })
  }
  logout(){
    this.auth.logout();
    this.interaction.presentToast("sesion finalizada");
    this.router.navigate(['/login'])

  }
  
  //--------------modal---------------------------------------------
  isModalOpen = false;
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  isModalOpen1 = false;
  setOpen1(isOpen: boolean) {
    this.isModalOpen1 = isOpen;
  }
  isModalOpen2 = false;
  setOpen2(isOpen: boolean) {
    this.isModalOpen2 = isOpen;
  }
  isModalOpen3 = false;
  setOpen3(isOpen: boolean) {
    this.isModalOpen3 = isOpen;
  }
  isModalOpen4 = false;
  setOpen4(isOpen: boolean) {
    this.isModalOpen4 = isOpen;
  }
  isModalOpen5 = false;
  setOpen5(isOpen: boolean) {
    this.isModalOpen5 = isOpen;
  }


}
