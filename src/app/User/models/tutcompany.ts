export class tutorcompany{
    id?:number;
    name: string;
    email:string;
    phone:string;
    alternative:string;
    companyId:number;
    empresa:String;



    constructor(name:string,email:string,phone:string,alternative:string,companyId:number){
        this.name = name;
        this.phone=phone;
        this.email=email;
        this.alternative=alternative;
        this.companyId=companyId;
        

    }
}
