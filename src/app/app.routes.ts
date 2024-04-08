import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './pages/hero/hero.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'hero/:id',
    component: HeroComponent,
  },
  {
    path: 'hero/5/hero/:id',
    component: HeroComponent,
  },
];
