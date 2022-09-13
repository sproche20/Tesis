import { DetalleReporteDto } from './../models/Dtos/DetalleReporteDto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosReporteDto } from '../models/Dtos/DatosReportesDtos';
import { Estudiante } from '../models/estudiante';

@Injectable({
  providedIn: 'root',
})
export class EstudianteService {
  productoURL = 'https://tesisss.herokuapp.com/students/';
  productoURLS='https://tesisss.herokuapp.com/students/with/carrera'


  constructor(private httpClient: HttpClient) {}
  public lista(): Observable<Estudiante[]> {
    return this.httpClient.get<Estudiante[]>(this.productoURLS);
  }
  public detail(id: number): Observable<Estudiante> {
    return this.httpClient.get<Estudiante>(this.productoURL + `${id}`);
  }
  public save(estudiante: Estudiante): Observable<any> {
    return this.httpClient.post<any>(this.productoURL, estudiante);
  }
  public update(estudiante: Estudiante): Observable<any> {
    return this.httpClient.put<any>(this.productoURL, estudiante);
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.productoURL + `delete/${id}`);
  }

  public cargarReporte(idStudent, idTutor): Observable<DatosReporteDto> {
    return this.httpClient.get<DatosReporteDto>(
      this.productoURL + idStudent + '/' + idTutor
    );
  }
  
}
