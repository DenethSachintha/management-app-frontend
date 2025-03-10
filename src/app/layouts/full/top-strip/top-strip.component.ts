import { Component } from '@angular/core';
import {TablerIconsModule} from 'angular-tabler-icons';
import {MatMenu, MatMenuItem, MatMenuModule, MatMenuTrigger} from '@angular/material/menu';
import {MatAnchor, MatButton, MatButtonModule} from '@angular/material/button';
import {MaterialModule} from '../../../material.module';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-top-strip',
  standalone: true,
  imports: [
    MaterialModule,
    MatButtonModule,
    MatMenuModule,
    TablerIconsModule,
    RouterLink,
  ],
  templateUrl: './top-strip.component.html',
  styleUrl: './top-strip.component.scss'
})
export class TopStripComponent {

}
