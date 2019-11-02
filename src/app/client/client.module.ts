import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { SelectedMovieComponent } from './selected-movie/selected-movie.component';
import { HeaderComponent } from './partials/header/header.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { TitleComponent } from './partials/title/title.component';
import { MakeReservationComponent } from './make-reservation/make-reservation.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from 'src/environments/environment.prod';
import { OrderListComponent } from './order-list/order-list.component';

@NgModule({
  declarations: [ClientLayoutComponent, HomePageComponent, AllMoviesComponent, SelectedMovieComponent, HeaderComponent, NavbarComponent, TitleComponent, MakeReservationComponent, OrderListComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule 

  ]
})
export class ClientModule { }
