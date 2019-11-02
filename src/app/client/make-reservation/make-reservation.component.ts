import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-make-reservation',
  templateUrl: './make-reservation.component.html',
  styleUrls: ['./make-reservation.component.scss']
})
export class MakeReservationComponent implements OnInit {

  movies: Movie[];
  makeOrder: FormGroup;

  constructor(private movieService: MovieService,
    private fb: FormBuilder, private orderService: OrderService, private route: Router) {}

  ngOnInit() {

    this.makeOrder = this.fb.group({
      userName: [''],
      userLastName: [''],
      movieId: [''],
      nroBoletos: [''],
    });

    this.movieService.getMovies.subscribe(item => {
      this.movies = item;
    });
  }

  onSubmit(){
    this.orderService.addOrder(this.makeOrder.value);
    this.route.navigate(['/']);
  }

}
