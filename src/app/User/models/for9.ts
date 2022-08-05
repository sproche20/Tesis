import { Time } from "@angular/common";

export class for9{
    id?:Number;
    actualDate:Date;
    startTime:Time;
    endTime:Time;
    totalHours:number;
    observations:string;
    practiceId:number;
    student:number;

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