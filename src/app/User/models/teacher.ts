export class Teacher{
    id?:number;
    name:string;
    phone:string;
    constructor(names:string,phone:string){
        this.name = names;
        this.phone = phone;
    }
}