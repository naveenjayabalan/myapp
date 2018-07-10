import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ServicesComponent } from './services/services.component';



export const router: Routes = [
    { path: '',  redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'services', component: ServicesComponent },
 ];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
