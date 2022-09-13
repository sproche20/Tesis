import { software } from './../models/software';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class SoftwareService{
    productoURL='https://tesisss.herokuapp.com/activity/';
    productoURLS='https://tesisss.herokuapp.com/activity/with/carrera';

    constructor(private httpClient:HttpClient) { }
    public lista():Observable<software[]>{
        return this.httpClient.get<software[]>(this.productoURLS)
    }
    public detail(id:number):Observable<software>{
      return this.httpClient.get<software>(this.productoURL + `${id}`);
    }
    public save(Software:software):Observable<any>{
        return this.httpClient.post<any>(this.productoURL,Software)

    }
    public update( Software:software): Observable<any> {
        return this.httpClient.put<any>(this.productoURL , Software);
      }
    public delete(id: number ): Observable<any> {
        return this.httpClient.delete<any>(this.productoURL+`delete/${id}`);
      }
     
  }