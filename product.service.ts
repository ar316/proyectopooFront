import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  apibase: String = environment.apiUrl;

  getAllProducts(): Observable<any>{
    return this.http.get<Product[]>(`${this.apibase}/products/getProducts`);
  }
}
