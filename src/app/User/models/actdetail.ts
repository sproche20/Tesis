export class Actdetail{
    id?:number;
    activitiesId:number;
    detailId:number;
    actividad:string;
    constructor(activitiesId:number,detailId:number){
        this.activitiesId=activitiesId;
        this.detailId=detailId;
    }
}