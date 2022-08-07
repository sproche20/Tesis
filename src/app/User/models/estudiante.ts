export class Estudiante {
    id?:number;
    nui:string;
    name:string;
    lastname:string;
    email:string;
    phone:string;
    careerId:number;
    carrera:string

    constructor(nui:string,name:string,lastname:string,email:string,phone:string,careerId:number){
        this.nui=nui
        this.name=name;
        this.lastname=lastname;
        this.email=email;
        this.phone=phone;
        this.careerId=careerId

    }
}
