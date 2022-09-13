import { NumberSymbol, Time } from "@angular/common";

export class for9{
    id?:number;
    actualDate:Date;
    startTime:Time;
    endTime:Time;
    totalHours:number;
    observations:string;
    practiceId:number;
    student:number;
    numberId:Number;
    constructor(actualDate:Date,startTime:Time,endTime:Time,totalHours:number,observations:string,practiceId:number,student:number){
        this.actualDate=actualDate;
        this.startTime=startTime;
        this.endTime=endTime;
        this.totalHours=totalHours;
        this.observations=observations;
        this.practiceId=practiceId;
        this.student=student;
        
    }

}