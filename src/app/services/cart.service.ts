import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: any[] = [];
  private cartSubject = new BehaviorSubject<any[]>([]);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.cart = this.loadCart();
    this.cartSubject.next([...this.cart]);
  }

  getCart() {
    console.log('Getting cart:', this.cart);
    return this.cartSubject.asObservable();
  }

  addToCart(product: any) {
    this.cart.push(product);
    this.saveCart();
    console.log('Cart after adding:', this.cart);
    this.cartSubject.next([...this.cart]);
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
    console.log('Cart cleared:', this.cart);
    this.cartSubject.next([...this.cart]);
  }

  private saveCart() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }

  private loadCart(): any[] {
    if (isPlatformBrowser(this.platformId)) {
      const storedCart = localStorage.getItem('cart');
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  }
}
