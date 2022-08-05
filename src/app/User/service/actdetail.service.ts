
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actdetail } from '../models/actdetail';


@Injectable({
    providedIn: 'root'
  })
  export class actdetailService{
    productoURL='http://localhost:8081/activitydetail/';

    constructor(private httpClient:HttpClient) { }
    public lista():Observable<Actdetail[]>{
        return this.httpClient.get<Actdetail[]>(this.productoURL)
    }
    public listActividad(id:number):Observable<Actdetail[]>{
      return this.httpClient.get<Actdetail[]>(this.productoURL+ `${id}`+'/full');
  }
    public detail(id:number):Observable<Actdetail>{
      return this.httpClient.get<Actdetail>(this.productoURL + `${id}`);
    }
    public save(actdetail:Actdetail):Observable<any>{
        return this.httpClient.post<any>(this.productoURL,actdetail)
    }
    public update( actdetail:Actdetail): Observable<any> {
      return this.httpClient.put<any>(this.productoURL , actdetail);
    }
  public delete(id: number ): Observable<any> {
      return this.httpClient.delete<any>(this.productoURL+ `delete/${id}`);
    }


  }