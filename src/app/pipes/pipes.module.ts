import { FiltroFirestorePipe } from './filtro.firestore.pipes';
import { FiltroActividadesPipe } from './filtroActividades.pipe';
import { Filtro1Pipe } from './filtro1.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroPipe } from './filtro.pipe';
import { FiltroDocentePipe } from './filtroDocente.pipe';
import { FiltroTutorPipe } from './filtroTutor.pipe';



@NgModule({
  declarations: [
    Filtro1Pipe,FiltroPipe,FiltroDocentePipe,FiltroTutorPipe,FiltroActividadesPipe,FiltroFirestorePipe],
    exports:[Filtro1Pipe,FiltroPipe,FiltroDocentePipe,FiltroTutorPipe,FiltroActividadesPipe,FiltroFirestorePipe]

})
export class PipesModule { }
