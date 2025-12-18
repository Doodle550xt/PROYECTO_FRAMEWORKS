import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth-service';
import { Jugador, JugadorPayload } from '../models/jugadores';
import { API_URL } from './api-url';

@Injectable({
  providedIn: 'root',
})
export class JugadoresService {

  constructor(private http: HttpClient, private authServices: AuthService) { }

  // Obtener todos los jugadores
  obtenerJugadores(): Observable<Jugador[]> {
    return this.http.get<Jugador[]>(`${API_URL}/api/jugadores`);
  }

  // Obtener un jugador por id
  obtenerJugadorPorId(id: number): Observable<Jugador> {
    return this.http.get<Jugador>(`${API_URL}/api/jugadores/${id}`);
  }

  // Actualizar un jugador
  actualizarJugador(id: number, jugador: Jugador): Observable<Jugador> {
    return this.http.put<Jugador>(`${API_URL}/api/jugadores/${id}`, jugador);
  }

  // Crear un jugador
  crearJugador(jugador: JugadorPayload): Observable<Jugador> {
    return this.http.post<Jugador>(`${API_URL}/api/jugadores`, jugador);
  }

  // Eliminar un jugador
  eliminarJugador(id: number): Observable<any> {
    return this.http.delete<any>(`${API_URL}/api/jugadores/${id}`);
  }
}
