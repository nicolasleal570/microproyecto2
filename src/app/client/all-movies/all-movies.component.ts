import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss']
})
export class AllMoviesComponent implements OnInit {

  movies: Movie[];

  constructor(private moviesService: MovieService) { }

  ngOnInit() {
    this.moviesService.getMovies.subscribe((movie) => {
      this.movies = movie;
    });
  }

}
