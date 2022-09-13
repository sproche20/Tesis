
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../models/teacher';

@Injectable({
    providedIn: 'root'
  })
  export class TeacherService{
    productoURL='https://tesisss.herokuapp.com/teachers/';

    constructor(private httpClient:HttpClient) { }
    public lista():Observable<Teacher[]>{
        return this.httpClient.get<Teacher[]>(this.productoURL)
    }
    public detail(id:number):Observable<Teacher>{
      return this.httpClient.get<Teacher>(this.productoURL + `${id}`);
    }
    public save(teacher:Teacher):Observable<any>{
        return this.httpClient.post<any>(this.productoURL,teacher)
    }
    public update( teacher:Teacher): Observable<any> {
      return this.httpClient.put<any>(this.productoURL , teacher);
    }
  public delete(id: number ): Observable<any> {
      return this.httpClient.delete<any>(this.productoURL+ `delete/${id}`);
    }


  }