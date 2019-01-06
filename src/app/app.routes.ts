import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'about', component: AboutComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }  //Por default redirecciona a home.
];

//usamos el hash porque al pasar parametros puede fallar, esto añade el numeral

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});

