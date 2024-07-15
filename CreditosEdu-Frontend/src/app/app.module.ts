import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule para formularios reactivos
import { FormsModule } from '@angular/forms'; // Importa FormsModule para ngModel

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreditRequestListComponent } from './pages/CreditRequestListComponent/CreditRequestListComponent.component';
import { CreditRequestDetailRComponent } from './pages/CreditRequestDetailRComponent/CreditRequestDetailRComponent.component';
import { CreditRequestDetailComponent } from './pages/CreditRequestDetailComponent/CreditRequestDetailComponent.component';
import { LoginComponent } from './pages/LoginComponent/LoginComponent.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreditRequestListComponent,
    CreditRequestDetailRComponent,
    CreditRequestDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule // Agrega FormsModule aquí
  ],
  providers: [],  // Registra el guardia aquí
  bootstrap: [AppComponent]
})
export class AppModule { }
