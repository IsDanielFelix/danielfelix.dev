import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then((m) => m.HomeComponent),
    title: 'Daniel Felix · Desarrollador web',
  },
  {
    path: 'proyectos/:slug',
    loadComponent: () =>
      import('./features/projects/project-detail.component').then(
        (m) => m.ProjectDetailComponent,
      ),
  },
  { path: '**', redirectTo: '' },
];