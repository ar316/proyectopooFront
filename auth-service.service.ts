import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoginDTO } from '../models/LoginDto';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private apiUrl = 'https://ancient-inlet-06295-76a565964152.herokuapp.com/proyectoPoo/user/Login'; 

  constructor(private http: HttpClient) {}

  login(loginDtO: LoginDTO): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, loginDtO)
      .pipe(
        tap(response => {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('userInfo', JSON.stringify(response.data.userDTO));

        })
      );
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}