import { PracticeDetailDto } from "./PracticeDetailDto"

export class PracticeReportDto {
     startDate: String = ""
     endDate: String = ""
     studentName: String = ""
     studentNui: String = ""
     careerName: String = ""
     companyName: String = ""
     practiceDetails: PracticeDetailDto[]=[]
}