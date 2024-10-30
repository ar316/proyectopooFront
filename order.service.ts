import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  apibase: String = environment.apiUrl;

  orderRegister(OrderDto: any): Observable<any>{
    return this.http.post(`${this.apibase}/orders/createOrder`, OrderDto);
  }
}
