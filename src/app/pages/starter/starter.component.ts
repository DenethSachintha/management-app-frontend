import { Component } from '@angular/core';
import {ShowProductsComponent} from '../../components/show-products/show-products.component';

@Component({
  selector: 'app-starter',
  standalone: true,
  imports: [
    ShowProductsComponent
  ],
  templateUrl: './starter.component.html',
  styleUrl: './starter.component.scss'
})
export class StarterComponent {

}
