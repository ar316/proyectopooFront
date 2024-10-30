import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = new BehaviorSubject<any[]>([]);
  cart$ = this.cart.asObservable();

  updateCart(cartProducts: any[]) {
    this.cart.next(cartProducts);
    if (cartProducts.length === 0) {
      this.clearCart();
    }
  }

  clearCart() {
    this.cart.next([]);
  }

  addToCart(product: any) {
    const currentCart = this.cart.value;
    this.cart.next([...currentCart, product]);
  }

  getCart() {
    return this.cart.value;
  }
}