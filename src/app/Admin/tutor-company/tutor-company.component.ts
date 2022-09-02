import {  tutorService } from './../../User/service/tutor.service'
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { tutorcompany } from 'src/app/User/models/tutcompany';
import { InteractionService } from 'src/app/User/service/interaction.service'
import { company } from 'src/app/User/models/company';
import { CompanyService } from 'src/app/User/service/company.service';
import { MenuController } from '@ionic/angular';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/User/service/auth.service';
import { FirestoreService } from 'src/app/User/service/firestore.service';
import { PipesModule } from 'src/app/pipes/pipes.module';


@Component({
  selector: 'app-tutor-company',
  templateUrl: './tutor-company.component.html',
  styleUrls: ['./tutor-company.component.scss'],
})
export class TutorCompanyComponent implements OnInit {
  name:'';
  email:'';
  phone:'';
  alternative:'';
  companyId:number=null;
  tutorcompany:tutorcompany[]=[];
  textoBuscar='';
  



  /**compania ---------------------------------*/
  names='';
  phones= '';
  contact='';
  company:company[]=[];

  constructor(
    public pipe:PipesModule,
    public popoverController: PopoverController,
    private router:Router,
    private menu: MenuController,
    private companyService:CompanyService,
    private interaction: InteractionService ,
    private auth:AuthService,
    private tutorService:tutorService,
    private firestore: FirestoreService,
    ) {this.menu.enable(false); }
    

  ngOnInit() {
    this.cargarCompany();
    this.cargarTutor();
  }
  /**compania----------------------- */
  onCreates():void{
    const compania=new company(this.names,this.phones,this.contact);
    this.companyService.save(compania).subscribe();
    if(compania){
      this.interaction.presentToast('registro exitoso');
      this.router.navigate(['/tutorcompany'])
    }
    
  }
/**tutor------------------------------ */

  onCreate():void{
    const tutorcompania=new tutorcompany(this.name,this.email,this.phone,this.alternative,this.companyId);
    this.tutorService.save(tutorcompania).subscribe();
    if(tutorcompania){
      this.interaction.presentToast('registro exitoso');
      this.router.navigate(['/tutorcompany'])
    }

}
cargarCompany():void{
  this.companyService.lista().subscribe(
    data=>{
      this.company=data;
    },
    err=>{
      console.log(err);
    }
  )
}

cargarTutor():void{
  this.tutorService.lista().subscribe(
    data=>{
      this.tutorcompany=data;
    },
    err=>{
      console.log(err);
    }
  )
}
borrar(id: number) {
  this.companyService.delete(id).subscribe(
    data => {
      console.log(data);
      console.log("borrado exitoso");
      this.cargarCompany();    
    },
  );
} 
borrarTutor(id: number) {
  this.tutorService.delete(id).subscribe(
    data => {
      console.log(data);
      console.log("borrado exitoso");
      this.cargarTutor();    
    },
  );
}
logout(){
  this.auth.logout();
  this.interaction.presentToast("sesion finalizada");
  this.router.navigate(['/loginteacher'])

}


/**roles----------------------------------------------------- */

login:boolean=false;
rol: 'visitante' | 'admin' = null;


/*-----busqueda-**/
busqueda(event){
  const texto=event.target.value;
  this.textoBuscar=texto;
}




}
