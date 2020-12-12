import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllArticulosComponent } from './components/all-articulos/all-articulos.component';
import { ArticuloDetalleComponent } from './components/articulo-detalle/articulo-detalle.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { UserDetalleComponent } from './components/user-detalle/user-detalle.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ArticuloFormComponent } from './components/articulo-form/articulo-form.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { CarritoComponent } from './components/carrito/carrito.component';
import { ArticulosService } from './services/articulos.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AllArticulosComponent,
    ArticuloDetalleComponent,
    AllUsersComponent,
    UserDetalleComponent,
    ArticuloFormComponent,
    ToolbarComponent,
    CarritoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot()

  ],
  providers: [ArticulosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
