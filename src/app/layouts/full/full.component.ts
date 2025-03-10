import {Component, ViewChild} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TopStripComponent} from './top-strip/top-strip.component';
import {MaterialModule} from '../../material.module';
import {HeaderComponent} from './header/header.component';
import {MatSidenav} from '@angular/material/sidenav';
import {TablerIconsModule} from 'angular-tabler-icons';

@Component({
  selector: 'app-full',
  standalone: true,
  imports: [
    RouterOutlet,
    TopStripComponent,
    MaterialModule,
    HeaderComponent,TablerIconsModule
  ],
  templateUrl: './full.component.html',
  styleUrl: './full.component.scss'
})
export class FullComponent {
  private isMobileScreen = false;
  @ViewChild('leftsidenav')
  public sidenav: MatSidenav | undefined;

  get isOver(): boolean {
    return this.isMobileScreen;
  }
}
