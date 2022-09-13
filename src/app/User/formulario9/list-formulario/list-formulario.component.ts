import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController, ModalController, PopoverController } from '@ionic/angular';
import { for9 } from '../../models/for9';
import { actdetailService } from '../../service/actdetail.service';
import { AuthService } from '../../service/auth.service';
import { for9Service } from '../../service/for9.service';
import { formulario9Service } from '../../service/formulario9.service';
import { InteractionService } from '../../service/interaction.service';

@Component({
  selector: 'app-list-formulario',
  templateUrl: './list-formulario.component.html',
  styleUrls: ['./list-formulario.component.scss'],
})
export class ListFormularioComponent implements OnInit {
  foro9:for9[]=[];
  practiceDetailId:any;
  Id:any;
  Ids:any;
  constructor(
    public popoverController: PopoverController,
    private menu: MenuController,
    private formato9:formulario9Service,
    private router:Router,
    private activatedRoute: ActivatedRoute,
    public  modalController:ModalController,
    private interaction:InteractionService,
    private auth:AuthService,


  
  ) { 

    
  }

  ngOnInit() {

    this.cargarRegistro(); 
  }
  openMenu(){
    this.menu.open();
  }
  cargarRegistro():void{
    const id = this.activatedRoute.snapshot.params.id;
    this.formato9.listPracticas(id).subscribe(
      data=>{
        this.foro9=data;
      },
      err=>{
        console.log(err);
      }
    )
  }
  inicio(){
    this.router.navigate(['/inicioEstudiante',this.Ids])
  }
  logout(){
    this.auth.logout();
    this.interaction.presentToast("sesion finalizada");
    this.router.navigate(['/login'])

  }
  isModalOpen5 = false;
  setOpen5(isOpen: boolean) {
    this.isModalOpen5 = isOpen;
  }

}
