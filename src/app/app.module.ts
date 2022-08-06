import { ActivityComponent } from './docente/act-dia/activity/activity.component';
import { ActDiaComponent } from './docente/act-dia/act-dia.component';
import { ListaUsersComponent } from './docente/lista-users/lista-users.component';
import { InicialComponent } from './docente/inicial/inicial.component';
import { ListFormularioComponent } from './User/formulario9/list-formulario/list-formulario.component';
import { ModalComponent } from './User/inicio/modal/modal.component';
import { LoginTeacherComponent } from './login/login-teacher/login-teacher.component';
import { SelectActivityComponent } from './User/formulario9/select-activity/select-activity.component';
import { EditarActComponent } from './User/lista-actividad/editar-act/editar-act.component';
import { ListaActividadComponent } from './User/lista-actividad/lista-actividad.component';
import { InicioComponent } from './User/inicio/inicio.component';
import { Tablafor9Component } from './User/formulario9/tablafor9/tablafor9.component';
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
import { ConvenioComponent } from './Admin/convenio/convenio.component';
import { TutorCompanyComponent } from './Admin/tutor-company/tutor-company.component';
import { ListaCompComponent } from './Admin/tutor-company/lista-comp/lista-comp.component';
import { ListaComponent } from './Admin/teacher/lista/lista.component';
import { TeacherComponent } from './Admin/teacher/teacher.component';
import { ListaEstudentsComponent } from './Admin/lista-estudents/lista-estudents.component';
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
    ListaEstudentsComponent,
    TeacherComponent,
    ListaComponent,
    ListaCompComponent,
    TutorCompanyComponent,
    ConvenioComponent,
    EditarComponent,
    EditTeacherComponent,
    EditCarreraComponent,
    EditEstudianteComponent,
    LoginComponent,
    Formulario9Component,
    ActividadesSoftwareComponent,
    EditarsoftwareComponent,
    Tablafor9Component,
    InicioComponent,
    ListaActividadComponent,
    EditarActComponent,
    SelectActivityComponent,
    LoginTeacherComponent,
    ModalComponent,
    ListFormularioComponent,
    InicialComponent,
    ListFormularioComponent,
    ListaUsersComponent,
    ActDiaComponent,
    ActivityComponent
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
