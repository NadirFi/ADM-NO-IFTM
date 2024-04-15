import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HeroPComponent } from './hero-p/hero-p.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'hero/:id',
    component: HeroPComponent,
  },
  {
    path: 'hero/5/sub/:id',
    component: HeroPComponent,
  },
  {
    path: 'hero/6/sub/:id',
    component: HeroPComponent,
  },
  {
    path: 'hero/15/sub/:id',
    component: HeroPComponent,
  },
];
