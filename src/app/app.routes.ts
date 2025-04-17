import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'web-development',
        loadComponent: () => import('./pages/web-development/web-development.component').then(m => m.WebDevelopmentComponent)
    },
    {
        path: 'steam',
        loadComponent: () => import('./pages/steam/steam.component').then(m => m.SteamComponent)
    },
    {
        path: 'services',
        loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent)
    },
    {
        path: 'photovoltaic',
        loadComponent: () => import('./pages/photovoltaic/photovoltaic.component').then(m => m.PhotovoltaicComponent)
    },
    {
        path: 'aplications',
        loadComponent: () => import('./pages/aplications/aplications.component').then(m => m.AplicationsComponent)
    },
    {
        path: 'about',
        loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
    },
    {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
    },
    {
        path: 'pruebas',
        loadComponent: () => import('./pages/pruebas/pruebas.component').then(m => m.PruebasComponent)
    },
    {
        path: '**',
        redirectTo: '', // Redirige a la página de inicio si la ruta no existe
        pathMatch: 'full'
    }
];