import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PalestrasComponent } from './components/palestras/palestras.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'palestras', component: PalestrasComponent },
];
