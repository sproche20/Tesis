import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Estudiante}from '../models/estudiante'

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  productoURL='http://localhost:8081/students/';
   



  constructor(private httpClient:HttpClient) { } 
  public lista():Observable<Estudiante[]>{
    return this.httpClient.get<Estudiante[]>(this.productoURL)
  }
  public detail(id:number):Observable<Estudiante>{
    return this.httpClient.get<Estudiante>(this.productoURL + `${id}`);
  }
  public save(estudiante:Estudiante):Observable<any>{
    return this.httpClient.post<any>(this.productoURL,estudiante)
  }
  public update( estudiante:Estudiante): Observable<any> {
    return this.httpClient.put<any>(this.productoURL , estudiante);
  }
public delete(id: number ): Observable<any> {
    return this.httpClient.delete<any>(this.productoURL+ `delete/${id}`);
  }
  

     
  

}
