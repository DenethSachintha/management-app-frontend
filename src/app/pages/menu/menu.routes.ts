import { Routes } from '@angular/router';

import {CustomersComponent} from './customers/customers.component';
import {ProductsComponent} from './products/products.component';
import {CartComponent} from './cart/cart.component';
export const MenuRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/menu/customers',
        pathMatch: 'full',
      },
      {
        path: 'customers',
        component: CustomersComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'cart',
        component: CartComponent,
      }
    ],
  },
];
