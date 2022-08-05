import { software } from './../../../User/models/software';
import { SoftwareService } from './../../../User/service/software.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PopoverController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-editarsoftware',
  templateUrl: './editarsoftware.component.html',
  styleUrls: ['./editarsoftware.component.scss'],
})
export class EditarsoftwareComponent implements OnInit {
  software:software=null;
  constructor( public popoverController: PopoverController,
    private router:Router,
    private menu:MenuController,
    private softwareService:SoftwareService,
    private activatedRoute: ActivatedRoute
) {this.menu.enable(false); }

ngOnInit() {

  const id = this.activatedRoute.snapshot.params.id;
  this.softwareService.detail(id).subscribe(
    data => {
      this.software = data;
    },
    err => {
      this.router.navigate(['/']);
    }
  );
}
onUpdate(){
  const id = this.activatedRoute.snapshot.params.id;
  this.softwareService.update(this.software).subscribe(
    data => {
      this.router.navigate(['/actsoftware']);
    },
    err => {
    }
  );
}

}
