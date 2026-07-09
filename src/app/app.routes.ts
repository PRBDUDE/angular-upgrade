import { Routes } from '@angular/router';
import {AppComponent} from './app.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./feature/home/home.component')
      .then(m => m.HomeComponent),
    title: 'Home'
  },
  {
    path: 'about',
    loadComponent: () => import('./feature/about/about.component')
      .then(m => m.AboutComponent),
    title: 'About'
  },
  {
    path: 'contact',
    loadComponent: () => import('./feature/contact/contact.component')
      .then(m => m.ContactComponent),
    title: 'Contact Us'
  },
  {
    path: 'feature-one',
    loadComponent: () => import('./feature/feature-1/feature-1.component')
      .then(m => m.Feature1Component),
    title: 'Feature One'
  },
  {
    path: 'feature-two',
    loadComponent: () => import('./feature/feature-2/feature-2.component')
      .then(m => m.Feature2Component),
    title: 'Feature Two'
  }
];
