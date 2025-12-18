import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth-service';
import { Competencia, CompetenciaPayload } from '../models/competencia';

@Injectable({
  providedIn: 'root',
})
export class CompetenciasService {

  constructor(
    private http: HttpClient,
    private authServices: AuthService
  ) { }

  obtenerCompetencias(): Observable<Competencia[]> {
    return this.http.get<Competencia[]>(`${API_URL}/api/competencias`);
  }

  obtenerCompetenciaPorId(id: number): Observable<Competencia> {
    return this.http.get<Competencia>(`${API_URL}/api/competencias/${id}`);
  }

  crearCompetencia(competencia: CompetenciaPayload): Observable<Competencia> {
    return this.http.post<Competencia>(
      `${API_URL}/api/competencias`,
      competencia
    );
  }

  actualizarCompetencia(
    id: number,
    competencia: CompetenciaPayload
  ): Observable<Competencia> {
    return this.http.put<Competencia>(
      `${API_URL}/api/competencias/${id}`,
      competencia
    );
  }

  eliminarCompetencia(id: number): Observable<void> {
    return this.http.delete<void>(
      `${API_URL}/api/competencias/${id}`
    );
  }
}
