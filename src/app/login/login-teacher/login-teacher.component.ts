import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/User/service/auth.service';
import { InteractionService } from 'src/app/User/service/interaction.service';

@Component({
  selector: 'app-login-teacher',
  templateUrl: './login-teacher.component.html',
  styleUrls: ['./login-teacher.component.scss'],
})
export class LoginTeacherComponent implements OnInit {
  constructor(private auth:AuthService,
    private interaction:InteractionService,
    private router:Router) { 

}


ngOnInit() {}
credenciales= {
correo: null,
password: null,
}
async  login(){

await this.interaction.presentLoading('ingresando...')
console.log('credenciales->',this.credenciales);
const res= await this.auth.login(this.credenciales.correo,this.credenciales.password).catch(error=>{
console.log("error");
this.interaction.closeLoading();
this.interaction.presentToast('usuario o contraseña invalido ')
});
if (res){
console.log('res->',res);
this.interaction.closeLoading();
this.interaction.presentToast('Bienvenido');
this.router.navigate(['/inicio'])

}
}
}
