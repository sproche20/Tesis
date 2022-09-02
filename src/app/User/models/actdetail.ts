export class Actdetail {
  id?: number;
  act:string;
  activitiesId: number;
  detailId: number;
 
  actividad: string;
  constructor(act:string, detailId: number,activitiesId: number,) {
    this.act=act;
    this.activitiesId = activitiesId;
    this.detailId = detailId;
  
  }
}
