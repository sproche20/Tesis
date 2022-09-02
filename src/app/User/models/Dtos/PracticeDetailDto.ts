import { Actdetail } from "../actdetail"


export class PracticeDetailDto {
     currentDate: String = ""
     startTime: String = ""
     endTime: String = ""
     totalHours: String=""
     activityDetails: Actdetail[]=[]
     observations: String = ""

}