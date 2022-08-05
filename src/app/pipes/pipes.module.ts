import { Filtro1Pipe } from './filtro1.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroPipe } from './filtro.pipe';



@NgModule({
  declarations: [
    FiltroPipe,Filtro1Pipe],
    exports:[FiltroPipe,Filtro1Pipe]

})
export class PipesModule { }
