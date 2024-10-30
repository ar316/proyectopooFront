
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDTO } from '../models/User';
import { environment } from 'src/environment';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl = `${environment.apiUrl}`

  constructor(private http: HttpClient ) {}

  register(userDTO: UserDTO): Observable<any>{
    return this.http.post(`${this.apiUrl}/user/createUser`, userDTO);
  }


}
