import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController, PopoverController } from '@ionic/angular';
import { Actdetail } from '../../models/actdetail';
import { software } from '../../models/software';
import { actdetailService } from '../../service/actdetail.service';

@Component({
  selector: 'app-editar-act',
  templateUrl: './editar-act.component.html',
  styleUrls: ['./editar-act.component.scss'],
})
export class EditarActComponent implements OnInit {

  actdetail:Actdetail=null;
    
  Software:software[]=[];

  constructor(
    public popoverController: PopoverController,
    private router:Router,
    private menu: MenuController,
    private actividaddetailService:actdetailService,
    private activatedRoute: ActivatedRoute

  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.actividaddetailService.detail(id).subscribe(
      data =>{
        this.actdetail=data;
      },
      err=>{
        this.router.navigate(['/']);
      }
    )
  }
  onUpdate(){
    const id = this.activatedRoute.snapshot.params.id;
    this.actividaddetailService.update(this.actdetail).subscribe(
      data => {
        this.router.navigate(['/listaActividad']);
      },
      err => {
      }
    );
  }
  openMenu(){
    this.menu.open();
  }


}
