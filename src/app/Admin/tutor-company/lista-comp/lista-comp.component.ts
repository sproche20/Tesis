import { InteractionService } from './../../../User/service/interaction.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from './../../../User/service/company.service';
import { company } from './../../../User/models/company';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-comp',
  templateUrl: './lista-comp.component.html',
  styleUrls: ['./lista-comp.component.scss'],
})
export class ListaCompComponent implements OnInit {
  company:company=null;
  constructor(
    public companyService:CompanyService,
    private router: Router,
    private interaction:InteractionService ,
    private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.companyService.detail(id).subscribe(
      data => {
        this.company = data;
      },
      err => {
        this.router.navigate(['/']);
      }
    );
 

  
  
  
  }
    onUpdate(){
      const id = this.activatedRoute.snapshot.params.id;
      this.companyService.update(this.company).subscribe(
        data => {
          this.router.navigate(['/tutorcompany']);
        },
        err => {
        }
      );
    }

}
