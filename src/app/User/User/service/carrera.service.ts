import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { carrera } from '../models/carrera';


@Injectable({
    providedIn: 'root'
  })
  export class CarreraService{
    productoURL='http://localhost:8081/carreras/';
    productoURLS='http://localhost:8081/carreras/with/profesor';

    constructor(private httpClient:HttpClient) { }
    public lista():Observable<carrera[]>{
        return this.httpClient.get<carrera[]>(this.productoURLS)
    }
    public detail(id:number):Observable<carrera>{
      return this.httpClient.get<carrera>(this.productoURL+ `${id}`);
    }
    public save(carrera:carrera):Observable<any>{
        return this.httpClient.post<any>(this.productoURL,carrera)
    }
    public update( carrera:carrera): Observable<any> {
      return this.httpClient.put<any>(this.productoURL , carrera);
    }
  public delete(id: number ): Observable<any> {
      return this.httpClient.delete<any>(this.productoURL+ `delete/${id}`);
    }


  }