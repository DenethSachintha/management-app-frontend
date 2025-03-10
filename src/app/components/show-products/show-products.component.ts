import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Product} from '../../models/product.model';
import {ProductService} from '../../services/product.service';
import {MaterialModule} from '../../material.module';
import {TablerIconsModule} from 'angular-tabler-icons';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-show-products',
  standalone: true,
  imports: [CommonModule,TablerIconsModule, MaterialModule],
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css'],
})
export class ShowProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService,
              private cartService: CartService
      ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}
