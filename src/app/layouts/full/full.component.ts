import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TopStripComponent} from './top-strip/top-strip.component';

@Component({
  selector: 'app-full',
  standalone: true,
  imports: [
    RouterOutlet,
    TopStripComponent
  ],
  templateUrl: './full.component.html',
  styleUrl: './full.component.scss'
})
export class FullComponent {

}
