import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { AlojamientoComponent } from './alojamiento/alojamiento.component';
import { RoomsComponent } from './alojamiento/rooms/rooms.component';
import { FoodBebidaComponent } from './food-bebida/food-bebida.component';
import { RestaurantComponent } from './food-bebida/restaurant/restaurant.component';
import { BarsComponent } from './food-bebida/bars/bars.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { BienestarSpaComponent } from './lifestyle/bienestar-spa/bienestar-spa.component';
import { ResortActividadesComponent } from './lifestyle/resort-actividades/resort-actividades.component';
import { ExperiencesComponent } from './lifestyle/experiences/experiences.component';
import { ExcursionsComponent } from './lifestyle/excursions/excursions.component';
import { BodasComponent } from './bodas/bodas.component';
import { BodasTailandesComponent } from './bodas/bodas-tailandes/bodas-tailandes.component';
import { BodasOccidentalesComponent } from './bodas/bodas-occidentales/bodas-occidentales.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { OffersComponent } from './offers/offers.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';



@NgModule({
  declarations: [
    AppComponent,
    AlojamientoComponent,
    RoomsComponent,
    FoodBebidaComponent,
    RestaurantComponent,
    BarsComponent,
    LifestyleComponent,
    BienestarSpaComponent,
    ResortActividadesComponent,
    ExperiencesComponent,
    ExcursionsComponent,
    BodasComponent,
    BodasTailandesComponent,
    BodasOccidentalesComponent,
    CelebrationsComponent,
    OffersComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
