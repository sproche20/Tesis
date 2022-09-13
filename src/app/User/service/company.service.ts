import { Observable } from 'rxjs';
import { company } from './../models/company';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class CompanyService{
    productoURL='https://tesisss.herokuapp.com/companies/';
    constructor(private httpClient:HttpClient) { }
    public lista():Observable<company[]>{
        return this.httpClient.get<company[]>(this.productoURL)
    }
    public detail(id:number):Observable<company>{
      return this.httpClient.get<company>(this.productoURL + `${id}`);
    }
    public save(company:company):Observable<any>{
        return this.httpClient.post<any>(this.productoURL,company)

    }
    public update( company:company): Observable<any> {
        return this.httpClient.put<any>(this.productoURL , company);
      }
    public delete(id: number ): Observable<any> {
        return this.httpClient.delete<any>(this.productoURL+`delete/${id}`);
      }
     
  }
  