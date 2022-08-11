import { Observable } from 'rxjs';
import { tutorcompany } from './../models/tutcompany';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class tutorService{
    productoURLS='http://localhost:8081/tutors/with/empresa'
    productoURL='http://localhost:8081/tutors/';
    constructor(private httpClient:HttpClient) { }
    public lista():Observable<tutorcompany[]>{
        return this.httpClient.get<tutorcompany[]>(this.productoURLS)
    }
    public detail(id:number):Observable<tutorcompany>{
      return this.httpClient.get<tutorcompany>(this.productoURL+ `${id}`);
    }
    public save(tutorcompany:tutorcompany):Observable<any>{
        return this.httpClient.post<any>(this.productoURL,tutorcompany)

    }
    public update( tutorcompany:tutorcompany): Observable<any> {
      return this.httpClient.put<any>(this.productoURL , tutorcompany);
    }
  public delete(id: number ): Observable<any> {
      return this.httpClient.delete<any>(this.productoURL+ `delete/${id}`);
    }
   
  }