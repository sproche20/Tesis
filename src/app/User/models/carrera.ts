export class carrera{
    id?:number;
    name: string;
    coordinator:string;
    teacherId:number;
    profesor:String;
    
    constructor(name:string,coordinator:string,teacherId:number){
        this.name = name;
        this.teacherId=teacherId;
        this.coordinator=coordinator;
        
    }
}