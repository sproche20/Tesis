export class Convenios{
    id?:number;
    tipo:string;
    fechaFirma:Date;
    fechaVencimiento:Date;
    carreraId:number;
    companyId:number;
    constructor(tipo:string,fechaFirma:Date,fechaVencimiento:Date,carreraId:number,company:number){
        this.tipo=tipo;
        this.fechaFirma=fechaFirma;
        this.fechaVencimiento=fechaVencimiento;
        this.carreraId=carreraId;
    }
}