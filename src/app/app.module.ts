import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FechaComponent } from './componentes/fecha/fecha.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { CuerpoPrincipalComponent } from './componentes/cuerpo-principal/cuerpo-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    FechaComponent,
    FormularioComponent,
    CuerpoPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
