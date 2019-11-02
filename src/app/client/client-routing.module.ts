import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { SelectedMovieComponent } from './selected-movie/selected-movie.component';
import { MakeReservationComponent } from './make-reservation/make-reservation.component';
import { OrderListComponent } from './order-list/order-list.component';


const routes: Routes = [
  { path: '', component: ClientLayoutComponent, children: [
    { path: '', component: HomePageComponent },
    { path: 'movies', component: AllMoviesComponent },
    { path: 'movie/:id', component: SelectedMovieComponent },
    { path: 'reservar', component: MakeReservationComponent },
    { path: 'ordenes', component: OrderListComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
