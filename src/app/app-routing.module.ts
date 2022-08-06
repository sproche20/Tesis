import { ActivityComponent } from './docente/act-dia/activity/activity.component';
import { ActDiaComponent } from './docente/act-dia/act-dia.component';
import { PdfComponent } from './pdf/pdf.component';
import { ListaUsersComponent } from './docente/lista-users/lista-users.component';
import { InicialComponent } from './docente/inicial/inicial.component';
import { ListFormularioComponent } from './User/formulario9/list-formulario/list-formulario.component';
import { LoginTeacherComponent } from './login/login-teacher/login-teacher.component';
import { SelectActivityComponent } from './User/formulario9/select-activity/select-activity.component';
import { EditarActComponent } from './User/lista-actividad/editar-act/editar-act.component';
import { ListaActividadComponent } from './User/lista-actividad/lista-actividad.component';
import { InicioComponent } from './User/inicio/inicio.component';
import { Tablafor9Component } from './User/formulario9/tablafor9/tablafor9.component';
import { EditarsoftwareComponent } from './docente/actividades-software/editarsoftware/editarsoftware.component';
import { ActividadesSoftwareComponent } from './docente/actividades-software/actividades-software.component';
import { Formulario9Component } from './User/formulario9/formulario9.component';
import { LoginComponent } from './login/login.component';
import { EditEstudianteComponent } from './User/datos/edit-estudiante/edit-estudiante.component';
import { EditCarreraComponent } from './Admin/teacher/edit-carrera/edit-carrera.component';
import { EditTeacherComponent } from './Admin/teacher/edit-teacher/edit-teacher.component';
import { EditarComponent } from './Admin/tutor-company/editar/editar.component';
import { Formato3Component } from './User/formato3/formato3.component';
import { ConvenioComponent } from './Admin/convenio/convenio.component';
import { TutorCompanyComponent } from './Admin/tutor-company/tutor-company.component';
import { ListaCompComponent } from './Admin/tutor-company/lista-comp/lista-comp.component';
import { ListaComponent } from './Admin/teacher/lista/lista.component';
import { TeacherComponent } from './Admin/teacher/teacher.component';
import { ListaEstudentsComponent } from './Admin/lista-estudents/lista-estudents.component';
import { DatosComponent } from './User/datos/datos.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Formato9Component } from './User/formato9/formato9.component';
import { map } from 'rxjs/operators';

const uidAdmin='7hDVeNKpwrYoUKfTyNBNl0yKjgS2'; 
const onlyAdmin = () => map((user:any) => !!user && user.uid === uidAdmin);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'for9/:id',component: Formato9Component

  },
  {
    path: 'datos',component: DatosComponent
  },
  {
    path: 'lista',component: ListaEstudentsComponent
  },
  {
    path: 'profesor',component: TeacherComponent
  },
  {
    path: 'listaTeacher',component:ListaComponent
  },
  {
    path: 'editarTeacher/:id',component:EditTeacherComponent
  },
  {
    path: 'editarEstudiante/:id',component:EditEstudianteComponent
  },
  
  {
    path: 'editar/:id',component:ListaCompComponent
  },
  {
    path: 'tutorcompany',component:TutorCompanyComponent
  },
  {
    path: 'editartutor/:id',component:EditarComponent
  },
  {
    path: 'editarcarrera/:id',component:EditCarreraComponent
  },
  {
    path: 'convenio',component:ConvenioComponent
  },
  {
    path: 'for3',component:Formato3Component

  },
  {
    path: 'login',component:LoginComponent

  },
  {
    path: 'formulario9/:id',component:Formulario9Component

  },
  {
    path: 'actsoftware',component:ActividadesSoftwareComponent

  },
  {
    path: 'editarsoftware/:id',component:EditarsoftwareComponent
  },
  {
    path: 'tablafor9/:id',component:Tablafor9Component
  },

    {
    path: 'inicioEstudiante/:id',component:InicioComponent
  },
  {
    path: 'listaActividad',component:ListaActividadComponent
  },
  {
    path: 'editarAct/:id',component:EditarActComponent
  },  
  {
    path: 'seleccionActividad/:id',component:SelectActivityComponent
  },
  {
    path: 'loginteacher',component:LoginTeacherComponent
  },
  {
    path: 'inicio',component:InicialComponent
  },
  {
    path: 'listformulario/:id',component:ListFormularioComponent
  },
  {
    path: 'listaUser',component:ListaUsersComponent
  },
  {
    path: 'actividadDia/:id',component:ActDiaComponent
  },
  {
    path: 'activity/:id',component:ActivityComponent
  },
  

  
  
  
  







];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    RouterModule.forRoot(routes, { useHash: true })

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
