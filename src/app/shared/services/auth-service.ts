import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) { }

  reigstrarUsuario(usuario: Usuario): Observable<any> {
    return this.http.post<{ token: string }>(`${API_URL}/api/auth/register`, usuario);
  }
  login(username: string, password: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${API_URL}/api/auth/login`, { username, password });
  }

  saveToken(token: string, username: string): void {
    localStorage.setItem("token", token)
    localStorage.setItem("username", username)
  }
  logout(): void {
    localStorage.removeItem("token")
    localStorage.removeItem("username")
  }
  isLogin(): boolean {
    return localStorage.getItem("token") != null
  }
  getUsername(): string {
    return localStorage.getItem("username") || ""
  }
  getToken() {
    return localStorage.getItem("token")
  }
}
