import { Injectable } from '@angular/core';
import {Product} from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    { id: 'P001', description: 'Laptop', unitPrice: 1200, qtyOnHand: 5 },
    { id: 'P002', description: 'Smartphone', unitPrice: 800, qtyOnHand: 10 },
    { id: 'P003', description: 'Headphones', unitPrice: 150, qtyOnHand: 15 },
  ];
  getProducts(): Product[] {
    return this.products;
  }
}
