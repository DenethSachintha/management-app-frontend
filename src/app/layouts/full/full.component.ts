import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TopStripComponent} from './top-strip/top-strip.component';
import {MaterialModule} from '../../material.module';

@Component({
  selector: 'app-full',
  standalone: true,
  imports: [
    RouterOutlet,
    TopStripComponent,
    MaterialModule,
  ],
  templateUrl: './full.component.html',
  styleUrl: './full.component.scss'
})
export class FullComponent {

}
