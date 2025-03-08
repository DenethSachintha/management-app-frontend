import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import {NotFoundComponent} from './components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/pages.routes').then((m) => m.PagesRoutes),
      },
       {
        path: 'menu',
        loadChildren: () =>
          import('./pages/menu/menu.routes').then(
            (m) => m.MenuRoutes
          ),
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];
