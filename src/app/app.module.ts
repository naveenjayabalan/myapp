import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routes } from './app.router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './navigation/menu.component';
import { MapComponent } from './services/map/map.component';
import { ChartComponent } from './services/chart/chart.component';
import { GridtableComponent } from './services/report/gridtable.component';
import { ServicesComponent } from './services/services.component';
import { AgmCoreModule } from '@agm/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    MenuComponent,
    MapComponent,
    ChartComponent,
    GridtableComponent,
    ServicesComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    routes,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCWN1D6LyQlKiP63eBS3Mi4HZb8n1bBDlk'
    }),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}


