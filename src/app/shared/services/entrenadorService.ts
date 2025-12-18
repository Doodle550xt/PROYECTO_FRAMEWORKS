import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entrenador,EntrenadorPayload } from '../models/entrenador';
import { Observable } from 'rxjs';
import { AuthService } from './auth-service';
import { API_URL } from './api-url';

@Injectable({
  providedIn: 'root',
})
export class EntrenadorService {

  constructor(private http: HttpClient, private authServices: AuthService) { }

  obtenerEntrenadores(): Observable<Entrenador[]> {
    return this.http.get<Entrenador[]>(`${API_URL}/api/entrenadores`);
  }

  obtenerEntrenadoresPorId(id: number): Observable<Entrenador> {
    return this.http.get<Entrenador>(`${API_URL}/api/entrenadores/${id}`);
  }


  actualizarEntrenadores(id: number, entrenador: Entrenador): Observable<Entrenador> {
    return this.http.put<Entrenador>(`${API_URL}/api/entrenadores/${id}`, entrenador);
  }

  crearEntrenador(entrenador: EntrenadorPayload): Observable<Entrenador> {
    return this.http.post<Entrenador>(`${API_URL}/api/entrenadores`, entrenador,);
  }

  eliminarEntrenador(id: number): Observable<any> {
    return this.http.delete<any>(`${API_URL}/api/entrenadores/${id}`, );
  }
}
