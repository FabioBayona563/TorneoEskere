import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutenticacionComponent } from './componentes/autenticacion/autenticacion.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import {CalendarModule} from 'primeng/calendar';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { EquipregisComponent } from './componentes/equipregis/equipregis.component';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { RegistorneoComponent } from './componentes/registorneo/registorneo.component';


const appRouters :Routes =[
  {path:'',component : PrincipalComponent },
  {path:'boton',component : AutenticacionComponent},
  {path:'opc1',component : RegistorneoComponent},
  {path:'administrador', component : AdministradorComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    AutenticacionComponent,
    EquipregisComponent,
    AdministradorComponent,
    RegistorneoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRouters)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
