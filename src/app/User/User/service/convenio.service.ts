import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Convenios} from 'src/app/User/models/convenios'





@Injectable({
    providedIn: 'root'
  })
  export class ConvenioService{
    productoURL='http://localhost:8081/convenios/';

    constructor(private httpClient:HttpClient) { }
    public lista():Observable<Convenios[]>{
        return this.httpClient.get<Convenios[]>(this.productoURL)
    }
    public save(convenios:Convenios):Observable<any>{
        return this.httpClient.post<any>(this.productoURL,convenios)
    }


  }