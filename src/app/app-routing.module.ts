import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { BodasComponent } from './bodas/bodas.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { AlojamientoComponent } from './alojamiento/alojamiento.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FoodBebidaComponent } from './food-bebida/food-bebida.component';
import { OffersComponent } from './offers/offers.component';

const routes:Routes =[
    { path : 'alojamiento', component:AlojamientoComponent },
    { path : 'celebrations', component:CelebrationsComponent},
    { path : 'food-bebida', component:FoodBebidaComponent},
    { path : 'lifestyle', component:LifestyleComponent},
    { path : 'bodas', component:BodasComponent},
    { path : 'signin', component:SigninComponent},
    { path : 'signup', component:SignupComponent},
    
];

@NgModule({
    imports :[RouterModule.forRoot(routes)],
    exports :[RouterModule]
})

export class AppRoutingModule{

}