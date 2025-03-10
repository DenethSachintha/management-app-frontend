import { Component, OnInit } from '@angular/core';
import {CartService} from '../../../services/cart.service';
import {CommonModule} from '@angular/common';
import {TablerIconsModule} from 'angular-tabler-icons';
import {MaterialModule} from '../../../material.module';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  imports: [CommonModule,TablerIconsModule, MaterialModule, ],
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCart().subscribe((items) => {
      this.cartItems = items;
      console.log('Cart in component:', this.cartItems);
    });
  }
}


