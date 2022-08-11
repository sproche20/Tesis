export class software{
    id?:number;
    description: string;
    observation:string;
    careerId:number;
    carrera:String;
    constructor(activities:string,career:number,observacion:string){
        this.description = activities;
        this.careerId=career;
        this.observation=observacion;
    }
}