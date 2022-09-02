import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PracticeReportDto } from '../models/Dtos/PracticeReportDto';
import { for9 } from '../models/for9';

@Injectable({
    providedIn: 'root'
  })
  export class formulario9Service{
    productoURL='http://localhost:8081/practicedetail/';
    constructor(private httpClient:HttpClient) { }
    public lista():Observable<for9[]>{
        return this.httpClient.get<for9[]>(this.productoURL)
    
      }
      public listPracticas(id:number):Observable<for9[]>{
        return this.httpClient.get<for9[]>(this.productoURL+ `${id}`+'/practice');
        } 
    


    public detail(id:number):Observable<for9>{
      return this.httpClient.get<for9>(this.productoURL+ `${id}`);
    }
    public save(formato9:for9):Observable<any>{
        return this.httpClient.post<any>(this.productoURL,formato9)
    }
    public update( formato9:for9): Observable<any> {
      return this.httpClient.put<any>(this.productoURL , formato9);
    }
  public delete(id: number ): Observable<any> {
      return this.httpClient.delete<any>(this.productoURL+ `delete/${id}`);
    }
    public cargarDatos(practiceId):Observable<PracticeReportDto>{
      return this.httpClient.get<PracticeReportDto>(
        this.productoURL+practiceId+'/fulldata'
      );
    }
    public listPracticasFechas(id,startDate:string,endDate:string):Observable<PracticeReportDto>{
      return this.httpClient.get<PracticeReportDto>(this.productoURL+id+`/week/${startDate}/${endDate}`);
      //http://localhost:8081/practices/1/week/20220731/20220801
  
  }
}