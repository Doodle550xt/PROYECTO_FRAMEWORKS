import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth-service';
import { Equipo, EquipoPayload } from '../models/equipos';
import { API_URL } from './api-url';

@Injectable({
  providedIn: 'root',
})
export class EquiposService {

  constructor(private http: HttpClient, private authServices: AuthService) { }

  // Obtener todos los equipos
  obtenerEquipos(): Observable<Equipo[]> {
    return this.http.get<Equipo[]>(`${API_URL}/api/equipos`);
  }

  // Obtener un equipo por id
  obtenerEquipoPorId(id: number): Observable<Equipo> {
    return this.http.get<Equipo>(`${API_URL}/api/equipos/${id}`);
  }

  // Actualizar un equipo
  actualizarEquipo(id: number, equipo: Equipo): Observable<Equipo> {
    return this.http.put<Equipo>(`${API_URL}/api/equipos/${id}`, equipo);
  }

  // Crear un equipo
  crearEquipo(equipo: EquipoPayload): Observable<Equipo> {
    return this.http.post<Equipo>(`${API_URL}/api/equipos`, equipo);
  }

  // Eliminar un equipo
  eliminarEquipo(id: number): Observable<any> {
    return this.http.delete<any>(`${API_URL}/api/equipos/${id}`);
  }
}
