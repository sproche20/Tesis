import { ActividaddComponent } from './User/formato9/actividadd/actividadd.component';
import { FechasComponent } from './User/fechas/fechas.component';
import { ListasComponent } from './User/formato9/listas/listas.component';
import { Editar9Component } from './User/formato9/editar9/editar9.component';
import { PdfComponent } from './User/pdf/pdf.component';

import { ListaUsersComponent } from './docente/lista-users/lista-users.component';
import { InicialComponent } from './docente/inicial/inicial.component';
import { ListFormularioComponent } from './User/formulario9/list-formulario/list-formulario.component';

import { LoginTeacherComponent } from './login/login-teacher/login-teacher.component';
import { SelectActivityComponent } from './User/formulario9/select-activity/select-activity.component';
import { EditarActComponent } from './User/lista-actividad/editar-act/editar-act.component';
import { ListaActividadComponent } from './User/lista-actividad/lista-actividad.component';
import { InicioComponent } from './User/inicio/inicio.component';
import { EditarsoftwareComponent } from './docente/actividades-software/editarsoftware/editarsoftware.component';
import { ActividadesSoftwareComponent } from './docente/actividades-software/actividades-software.component';
import { Formulario9Component } from './User/formulario9/formulario9.component';
import { environment } from './../environments/environment';
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
import { Formato9Component } from './User/formato9/formato9.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import{HttpClientModule} from '@angular/common/http';
import{FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { PipesModule } from './pipes/pipes.module';



@NgModule({
  declarations: [
    AppComponent,
    Formato9Component,
    Formato3Component,
    DatosComponent,
    TeacherComponent,
    ListaCompComponent,
    TutorCompanyComponent,
    EditarComponent,
    EditTeacherComponent,
    EditCarreraComponent,
    EditEstudianteComponent,
    LoginComponent,
    Formulario9Component,
    ActividadesSoftwareComponent,
    EditarsoftwareComponent,
    InicioComponent,
    ListaActividadComponent,
    EditarActComponent,
    SelectActivityComponent,
    LoginTeacherComponent,
    ListFormularioComponent,
    InicialComponent,
    ListFormularioComponent,
    ListaUsersComponent,
    Editar9Component,
    PdfComponent,
    ListasComponent,
    FechasComponent,
    ActividaddComponent
  ],
  
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(),
     AppRoutingModule,
     HttpClientModule,
     FormsModule,
     AngularFireModule.initializeApp(environment.firebaseConfig),
     AngularFireAuthModule,
     AngularFirestoreModule,
     PipesModule,
    ],
  providers: [{ provide: RouteReuseStrategy , useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
