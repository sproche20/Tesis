import { Teacher } from './../../../User/models/teacher';
import { TeacherService } from './../../../User/service/teacher.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController, PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.scss'],
})
export class EditTeacherComponent implements OnInit {
  teacher:Teacher=null;

  constructor( public popoverController: PopoverController,
    private router:Router,
    private menu:MenuController,
    private teacherService:TeacherService,
    private activatedRoute: ActivatedRoute
) {this.menu.enable(false); }


  
  ngOnInit() {

    const id = this.activatedRoute.snapshot.params.id;
    this.teacherService.detail(id).subscribe(
      data => {
        this.teacher = data;
      },
      err => {
        this.router.navigate(['/']);
      }
    );
  }
  onUpdate(){
    const id = this.activatedRoute.snapshot.params.id;
    this.teacherService.update(this.teacher).subscribe(
      data => {
        this.router.navigate(['/profesor']);
      },
      err => {
      }
    );
  }

}
