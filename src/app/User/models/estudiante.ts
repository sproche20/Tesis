export class Estudiante {
    id?:number;
    nui:string;
    name:string;
    lastname:string;
    email:string;
    phone:string;

    constructor(nui:string,name:string,lastname:string,email:string,phone:string){
        this.nui=nui
        this.name=name;
        this.lastname=lastname;
        this.email=email;
        this.phone=phone;

    }
}
