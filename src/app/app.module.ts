import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './navigation/menu.component';
import { MapComponent } from './services/map/map.component';
import { ChartComponent } from './services/chart/chart.component';
import { GridtableComponent } from './services/report/gridtable.component';
import { ServicesComponent } from './services/services.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    MenuComponent,
    MapComponent,
    ChartComponent,
    GridtableComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

const appRoutes: routes = [
  { path: 'login', component: LoginComponent },
  { path: 'services',      component: ServicesComponent },
  
];
