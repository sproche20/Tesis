import { for9 } from './../models/for9';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { formato9 } from '../models/formulario9';
import { PracticeReportDto } from '../models/Dtos/PracticeReportDto';

@Injectable({
    providedIn: 'root'
  })
  export class for9Service{
    productoURL='http://localhost:8081/practices/';
    productoURLS='http://localhost:8081/practices/with/estudiante';

   

    constructor(private httpClient:HttpClient) { }
    public lista():Observable<formato9[]>{
        return this.httpClient.get<formato9[]>(this.productoURLS)
    }
    public listPracticasEstudiante(id:number):Observable<formato9[]>{
      return this.httpClient.get<formato9[]>(this.productoURL+ `${id}`+'/student');
  }
  public listPracticasFechas(id,startDate:string,endDate:string):Observable<PracticeReportDto>{
    return this.httpClient.get<PracticeReportDto>(this.productoURL+id+'/week/'+`${startDate}`+'/'+`${endDate}`);
    //http://localhost:8081/practices/1/week/20220731/20220801
}
    public detail(id:number):Observable<formato9>{
      return this.httpClient.get<formato9>(this.productoURL+ `${id}`);
    }
    public save(for9:formato9):Observable<any>{
        return this.httpClient.post<any>(this.productoURL,for9)
    }
    public update( for9:formato9): Observable<any> {
      return this.httpClient.put<any>(this.productoURL , for9);
    }
  public delete(id: number ): Observable<any> {
      return this.httpClient.delete<any>(this.productoURL+ `delete/${id}`);
    }
    public cargarDatos(practiceId):Observable<PracticeReportDto>{
      return this.httpClient.get<PracticeReportDto>(
        this.productoURL+practiceId+'/fulldata'
      );
    }
  }