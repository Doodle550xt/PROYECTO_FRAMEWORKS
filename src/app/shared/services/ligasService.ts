import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth-service';
import { Liga, LigaPayload } from '../models/ligas';

@Injectable({
  providedIn: 'root',
})
export class LigasService {
  private API_URL = 'https://liga-deportes-mpg3.onrender.com';

  constructor(
    private http: HttpClient,
    private authServices: AuthService
  ) {}

  // Obtener todas las ligas
  obtenerLigas(): Observable<Liga[]> {
    return this.http.get<Liga[]>(`${API_URL}/api/ligas`);
  }

  // Obtener una liga por id
  obtenerLigaPorId(id: number): Observable<Liga> {
    return this.http.get<Liga>(`${API_URL}/api/ligas/${id}`);
  }

  // Crear una liga
  crearLiga(liga: LigaPayload): Observable<Liga> {
    return this.http.post<Liga>(`${API_URL}/api/ligas`, liga);
  }

  // Actualizar una liga
  actualizarLiga(id: number, liga: Liga): Observable<Liga> {
    return this.http.put<Liga>(`${API_URL}/api/ligas/${id}`, liga);
  }

  // Eliminar una liga
  eliminarLiga(id: number): Observable<void> {
    return this.http.delete<void>(`${API_URL}/api/ligas/${id}`);
  }
}
