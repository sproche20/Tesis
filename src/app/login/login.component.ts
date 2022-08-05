import { Router } from '@angular/router';
import { InteractionService } from './../User/service/interaction.service';
import { AuthService } from './../User/service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
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
this.router.navigate(['/inicioEstudiante'])

}
}


}
