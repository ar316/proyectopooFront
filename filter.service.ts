import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private apiUrl = 'https://ancient-inlet-06295-76a565964152.herokuapp.com/proyectoPoo/products/';


  constructor(private http: HttpClient, private productService: ProductService) {}

  // Obtener productos por categoría
  getProductsByCategory(category: string): Observable<any> {
    console.log(category)
    if(category != null && category.trim() === ""){

      return this.productService.getAllProducts();
    }
    const url = `${this.apiUrl}GetProductsByCategory?category=${category}`;
    return this.http.get(url);
  }
}