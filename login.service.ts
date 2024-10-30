import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { UserDTO } from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }


  login(user:  UserDTO):Observable<any>{
    return this.http.post(`${this.apiUrl}/login`, user);
  }


}
