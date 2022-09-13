import { CrearFirebaseComponent } from './User/datos/crear-firebase/crear-firebase.component';
import { PerfilComponent } from './User/perfil/perfil.component';

import { ActividaddComponent } from './User/formato9/actividadd/actividadd.component';
import { ListasComponent } from './User/formato9/listas/listas.component';
import { Editar9Component } from './User/formato9/editar9/editar9.component';
import { PdfComponent } from './User/pdf/pdf.component';

import { ListaUsersComponent } from './docente/lista-users/lista-users.component';
import { InicialComponent } from './docente/inicial/inicial.component';
import { ListFormularioComponent } from './User/formulario9/list-formulario/list-formulario.component';
import { LoginTeacherComponent } from './login/login-teacher/login-teacher.component';
import { SelectActivityComponent } from './User/formulario9/select-activity/select-activity.component';

import { InicioComponent } from './User/inicio/inicio.component';
import { EditarsoftwareComponent } from './docente/actividades-software/editarsoftware/editarsoftware.component';
import { ActividadesSoftwareComponent } from './docente/actividades-software/actividades-software.component';
import { Formulario9Component } from './User/formulario9/formulario9.component';
import { LoginComponent } from './login/login.component';
import { EditEstudianteComponent } from './User/datos/edit-estudiante/edit-estudiante.component';
import { EditCarreraComponent } from './Admin/teacher/edit-carrera/edit-carrera.component';
import { EditTeacherComponent } from './Admin/teacher/edit-teacher/edit-teacher.component';
import { EditarComponent } from './Admin/tutor-company/editar/editar.component';
import { Formato3Component } from './User/formato3/formato3.component';
import { TutorCompanyComponent } from './Admin/tutor-company/tutor-company.component';
import { ListaCompComponent } from './Admin/tutor-company/lista-comp/lista-comp.component';
import { TeacherComponent } from './Admin/teacher/teacher.component';
import { DatosComponent } from './User/datos/datos.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Formato9Component } from './User/formato9/formato9.component';
import { map } from 'rxjs/operators';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';
import { canActivate } from '@angular/fire/compat/auth-guard';


const uidAdmin='xQXDioaRN8OfOfD3aGBGlqmmSDA2'; 
const onlyAdmin = () => map((user:any) => !!user && user.uid === uidAdmin);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'for9/:id',component: Formato9Component,canActivate: [AngularFireAuthGuard]

  },
  {
    path: 'datos',component: DatosComponent,canActivate: [AngularFireAuthGuard]

  },

  {
    path: 'profesor',component: TeacherComponent, ...canActivate(onlyAdmin)
  },
  {
    path: 'editarTeacher/:id',component:EditTeacherComponent,...canActivate(onlyAdmin)
  },
  {
    path: 'editarEstudiante/:id',component:EditEstudianteComponent,canActivate: [AngularFireAuthGuard]
  },
  
  {
    path: 'editar/:id',component:ListaCompComponent,...canActivate(onlyAdmin)
  },
  {
    path: 'tutorcompany',component:TutorCompanyComponent,...canActivate(onlyAdmin)
  },
  {
    path: 'editartutor/:id',component:EditarComponent,...canActivate(onlyAdmin)
  },
  {
    path: 'editarcarrera/:id',component:EditCarreraComponent,...canActivate(onlyAdmin)
  },
  {
    path: 'for3',component:Formato3Component

  },
  {
    path: 'login',component:LoginComponent

  },
  {
    path: 'formulario9/:id',component:Formulario9Component,canActivate: [AngularFireAuthGuard]

  },
  {
    path: 'actsoftware',component:ActividadesSoftwareComponent,canActivate: [AngularFireAuthGuard]

  },
  {
    path: 'editarsoftware/:id',component:EditarsoftwareComponent,canActivate: [AngularFireAuthGuard]
  },
    {
    path: 'inicioEstudiante/:id',component:InicioComponent,canActivate: [AngularFireAuthGuard]
  },
  {
    path: 'seleccionActividad/:id',component:SelectActivityComponent,canActivate: [AngularFireAuthGuard]
  },
  {
    path: 'loginteacher',component:LoginTeacherComponent
  },
  {
    path: 'inicio',component:InicialComponent,canActivate: [AngularFireAuthGuard]
  },
  {
    path: 'listformulario/:id',component:ListFormularioComponent
  },
  {
    path: 'listas/:id',component:ListasComponent,canActivate: [AngularFireAuthGuard]
  },
  {
    path: 'listaUser',component:ListaUsersComponent,canActivate: [AngularFireAuthGuard]
  },

  {
    path: 'pdf/:id',component:PdfComponent
  },
  {
    path: 'editarActividad/:id',component:Editar9Component,canActivate: [AngularFireAuthGuard]
  },

  {
    path: 'actividades/:id',component:ActividaddComponent,canActivate: [AngularFireAuthGuard],
  },
  {
    path: 'perfil',component:PerfilComponent,canActivate: [AngularFireAuthGuard]
  },
  {
    path: 'CrearFirebase/:id',component:CrearFirebaseComponent,canActivate: [AngularFireAuthGuard]
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
