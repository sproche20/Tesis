import { tutorcompany } from './../../../User/models/tutcompany';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController, PopoverController } from '@ionic/angular';
import { InteractionService } from './../../../User/service/interaction.service';
import { tutorService } from './../../../User/service/tutor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss'],
})
export class EditarComponent implements OnInit {
  tutorcompany:tutorcompany=null;

  constructor(
    public popoverController: PopoverController,
    private router:Router,
    private menu: MenuController,
    private interaction: InteractionService ,
    private tutorService:tutorService,
    private activatedRoute: ActivatedRoute

    ) {this.menu.enable(false); }

  ngOnInit() {

    const id = this.activatedRoute.snapshot.params.id;
    this.tutorService.detail(id).subscribe(
      data => {
        this.tutorcompany = data;
      },
      err => {
        this.router.navigate(['/']);
      }
    );
  }
  onUpdate(){
    const id = this.activatedRoute.snapshot.params.id;
    this.tutorService.update(this.tutorcompany).subscribe(
      data => {
        this.router.navigate(['/tutorcompany']);
      },
      err => {
      }
    );
  }


}
