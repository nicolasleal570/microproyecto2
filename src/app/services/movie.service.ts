import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: Movie[];

  constructor() {
    this.movies = [
      {
        "id": "1a57454d",
        "title": "Avatar",
        "year": "2009",
        "rated": "PG-13",
        "released": "18 Dec 2009",
        "runtime": "162 min",
        "genre": ["Action", "Adventure", "Fantasy"],
        "director": "James Cameron",
        "writer": "James Cameron",
        "actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "language": "English, Spanish",
        "country": "USA, UK",
        "awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "poster": "https://3.bp.blogspot.com/_RRYNK-caPgI/SnUnXG0X90I/AAAAAAAAACE/G5dLSn2KlI4/s1600/Avatar+poster.jpg",
        "avaliable": true,
        "comingSoon": false,
        "images": [
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BNzM2MDk3MTcyMV5BMl5BanBnXkFtZTcwNjg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY2ODQ3NjMyMl5BMl5BanBnXkFtZTcwODg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxOTEwNDcxN15BMl5BanBnXkFtZTcwOTg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMDg1Nzk1MV5BMl5BanBnXkFtZTcwMDk0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
        ],
        "nroAsientos": 30
      },
      {
        "id": "1a574542",
        "title": "I Am Legend",
        "year": "2007",
        "rated": "PG-13",
        "released": "14 Dec 2007",
        "runtime": "101 min",
        "genre": ["Drama", "Horror", "Sci-Fi"],
        "director": "Francis Lawrence",
        "writer": "Mark Protosevich (screenplay), Akiva Goldsman (screenplay), Richard Matheson (novel), John William Corrington, Joyce Hooper Corrington",
        "actors": "Will Smith, Alice Braga, Charlie Tahan, Salli Richardson-Whitfield",
        "plot": "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
        "language": "English",
        "country": "USA",
        "awards": "9 wins & 21 nominations.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/d/df/I_am_legend_teaser.jpg",
        "avaliable": true,
        "comingSoon": false,
        "images": [
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZTYwMDA0Nzc4._V1_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTIwMDg2MDU4M15BMl5BanBnXkFtZTYwMTA0Nzc4._V1_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc5MDM1OTU5OV5BMl5BanBnXkFtZTYwMjA0Nzc4._V1_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0MTI2NjMzMzFeQTJeQWpwZ15BbWU2MDMwNDc3OA@@._V1_.jpg"
        ],
        "nroAsientos": 30
      },
      {
        "id": "1a57asdd",
        "title": "300",
        "year": "2006",
        "rated": "R",
        "released": "09 Mar 2007",
        "runtime": "117 min",
        "genre": ["Action", "Drama", "Fantasy"],
        "director": "Zack Snyder",
        "writer": "Zack Snyder (screenplay), Kurt Johnstad (screenplay), Michael Gordon (screenplay), Frank Miller (graphic novel), Lynn Varley (graphic novel)",
        "actors": "Gerard Butler, Lena Headey, Dominic West, David Wenham",
        "plot": "King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.",
        "language": "English",
        "country": "USA",
        "awards": "16 wins & 42 nominations.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/5/5c/300poster.jpg",
        "avaliable": true,
        "comingSoon": false,
        "images": [
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNTg5MzMwMV5BMl5BanBnXkFtZTcwMzA2NTIyMw@@._V1_SX1777_CR0,0,1777,937_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwNTgyNTMzNF5BMl5BanBnXkFtZTcwNDA2NTIyMw@@._V1_SX1777_CR0,0,1777,935_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0MjQzOTEwMV5BMl5BanBnXkFtZTcwMzE2NTIyMw@@._V1_SX1777_CR0,0,1777,947_AL_.jpg"
        ],
        "nroAsientos": 30
      },
      {
        "id": "545454d",
        "title": "The Avengers",
        "year": "2012",
        "rated": "PG-13",
        "released": "04 May 2012",
        "runtime": "143 min",
        "genre": ["Action", "Sci-Fi", "Thriller"],
        "director": "Joss Whedon",
        "writer": "Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)",
        "actors": "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
        "plot": "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
        "language": "English, Russian",
        "country": "USA",
        "awards": "Nominated for 1 Oscar. Another 34 wins & 75 nominations.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg",
        "avaliable": true,
        "comingSoon": false,
        "images": [
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0NjY0NzE4OTReQTJeQWpwZ15BbWU3MDczODg2Nzc@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE1MzEzMjcyM15BMl5BanBnXkFtZTcwNDM4ODY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwMzM2MTg1M15BMl5BanBnXkFtZTcwNjM4ODY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4NzM2Mjc5MV5BMl5BanBnXkFtZTcwMTkwOTY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3MzQ3NjA5N15BMl5BanBnXkFtZTcwMzY5OTY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg"
        ],
        "nroAsientos": 30
      },
      {
        "id": "1a57bfbl",
        "title": "The Wolf of Wall Street",
        "year": "2013",
        "rated": "R",
        "released": "25 Dec 2013",
        "runtime": "180 min",
        "genre": ["Biography", "Comedy", "Crime"],
        "director": "Martin Scorsese",
        "writer": "Terence Winter (screenplay), Jordan Belfort (book)",
        "actors": "Leonardo DiCaprio, Jonah Hill, Margot Robbie, Matthew McConaughey",
        "plot": "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
        "language": "English, French",
        "country": "USA",
        "awards": "Nominated for 5 Oscars. Another 35 wins & 154 nominations.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/The_Wolf_of_Wall_Street_%282013%29.png/220px-The_Wolf_of_Wall_Street_%282013%29.png",
        "avaliable": true,
        "comingSoon": false,
        "images": [
          "https://images-na.ssl-images-amazon.com/images/M/MV5BNDIwMDIxNzk3Ml5BMl5BanBnXkFtZTgwMTg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0NzAxODAyMl5BMl5BanBnXkFtZTgwMDg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTExMDk1MDE4NzVeQTJeQWpwZ15BbWU4MDM4NDM0ODAx._V1_SX1500_CR0,0,1500,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg3MTY4NDk4Nl5BMl5BanBnXkFtZTgwNjc0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgzMTg4MDI0Ml5BMl5BanBnXkFtZTgwOTY0MzQ4MDE@._V1_SY1000_CR0,0,1553,1000_AL_.jpg"
        ],
        "nroAsientos": 30
      },
      {
        "id": "1a51232d",
        "title": "Interstellar",
        "year": "2014",
        "rated": "PG-13",
        "released": "07 Nov 2014",
        "runtime": "169 min",
        "genre": ["Adventure", "Drama", "Sci-Fi"],
        "director": "Christopher Nolan",
        "writer": "Jonathan Nolan, Christopher Nolan",
        "actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "language": "English",
        "country": "USA, UK",
        "awards": "Won 1 Oscar. Another 39 wins & 134 nominations.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
        "avaliable": true,
        "comingSoon": false,
        "images": [
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NTEwOTMxMV5BMl5BanBnXkFtZTgwMjMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMzQ5ODE2MzEwM15BMl5BanBnXkFtZTgwMTMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg4Njk4MzY0Nl5BMl5BanBnXkFtZTgwMzIyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMzE3MTM0MTc3Ml5BMl5BanBnXkFtZTgwMDIyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BNjYzNjE2NDk3N15BMl5BanBnXkFtZTgwNzEyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
        ],
        "nroAsientos": 30
      },
      {
        "id": "65da42d",
        "comingSoon": true,
        "avaliable": false,
        "title": "Doctor Strange",
        "year": "2016",
        "rated": "N/A",
        "released": "04 Nov 2016",
        "runtime": "N/A",
        "genre": ["Action", "Adventure", "Fantasy"],
        "director": "Scott Derrickson",
        "writer": "Scott Derrickson (screenplay), C. Robert Cargill (screenplay), Jon Spaihts (story by), Scott Derrickson (story by), C. Robert Cargill (story by), Steve Ditko (comic book)",
        "actors": "Rachel McAdams, Benedict Cumberbatch, Mads Mikkelsen, Tilda Swinton",
        "plot": "After his career is destroyed, a brilliant but arrogant and conceited surgeon gets a new lease on life when a sorcerer takes him under her wing and trains him to defend the world against evil.",
        "language": "English",
        "country": "USA",
        "awards": "N/A",
        "poster": "https://upload.wikimedia.org/wikipedia/en/c/c7/Doctor_Strange_poster.jpg",
        "images": [
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3ODc1ODI5Ml5BMl5BanBnXkFtZTgwODMzMDY3OTE@._V1_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxNTAyNTU0NV5BMl5BanBnXkFtZTgwNzMzMDY3OTE@._V1_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE5NDc5NzUwNV5BMl5BanBnXkFtZTgwMDM3MDM2NzE@._V1_.jpg"
        ],
        "nroAsientos": 30
      },
      {
        "id": "ad1231a2",
        "comingSoon": true,
        "avaliable": false,
        "title": "Rogue One: A Star Wars Story",
        "year": "2016",
        "rated": "N/A",
        "released": "16 Dec 2016",
        "runtime": "N/A",
        "genre": ["Action", "Adventure", "Sci-Fi"],
        "director": "Gareth Edwards",
        "writer": "Chris Weitz (screenplay), Tony Gilroy (screenplay), John Knoll (story), Gary Whitta (story), George Lucas (characters)",
        "actors": "Felicity Jones, Riz Ahmed, Mads Mikkelsen, Ben Mendelsohn",
        "plot": "The Rebellion makes a risky move to steal the plans to the Death Star, setting up the epic saga to follow.",
        "language": "English",
        "country": "USA",
        "awards": "1 nomination.",
        "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Rogue_One%2C_A_Star_Wars_Story_poster.png/220px-Rogue_One%2C_A_Star_Wars_Story_poster.png",
        "images": [
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3MzA4Nzk3NV5BMl5BanBnXkFtZTgwNjAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BNDMxMTQzMjQxM15BMl5BanBnXkFtZTgwNzAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUyNjkxOTk5NV5BMl5BanBnXkFtZTgwODAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BNjM4MzExNDAyNl5BMl5BanBnXkFtZTgwOTAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3NTgxMDcyNV5BMl5BanBnXkFtZTgwMDExMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg"
        ],
        "nroAsientos": 30
      },
      {
        "id": "1azzo1A",
        "comingSoon": true,
        "avaliable": false,
        "title": "Assassin's Creed",
        "year": "2016",
        "rated": "N/A",
        "released": "21 Dec 2016",
        "runtime": "N/A",
        "genre": ["Action", "Adventure", "Fantasy"],
        "director": "Justin Kurzel",
        "writer": "Bill Collage (screenplay), Adam Cooper (screenplay), Michael Lesslie (screenplay)",
        "actors": "Michael Fassbender, Michael Kenneth Williams, Marion Cotillard, Jeremy Irons",
        "plot": "When Callum Lynch explores the memories of his ancestor Aguilar and gains the skills of a Master Assassin, he discovers he is a descendant of the secret Assassins society.",
        "language": "English",
        "country": "UK, France, USA, Hong Kong",
        "awards": "N/A",
        "poster": "https://upload.wikimedia.org/wikipedia/en/a/a0/Assassin%27s_Creed_film_poster.jpg",
        "images": [
          "https://images-na.ssl-images-amazon.com/images/M/MV5BN2EyYzgyOWEtNTY2NS00NjRjLWJiNDYtMWViMjg5MWZjYjgzXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwOWYzOTctOTc4My00ZmJkLTgzMTctMmUxNDI5ODQzYzNjXkEyXkFqcGdeQXVyNDAyODU1Njc@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BZTY5ZGUxMTAtYTU0OC00NGQ2LTkzNzgtZGZmNjlmNjY3MGU0XkEyXkFqcGdeQXVyNTY0MTkxMTg@._V1_SY1000_CR0,0,1500,1000_AL_.jpg",
          "https://images-na.ssl-images-amazon.com/images/M/MV5BZjA0MWYwZTEtYzc5Yi00NGM2LTg1YTctNjY2YzQ0NDJhZDAwXkEyXkFqcGdeQXVyNDAyODU1Njc@._V1_SY1000_CR0,0,1499,1000_AL_.jpg"
        ],
        "nroAsientos": 30
      }
    ];
  }

  get getMovies(): Observable<Movie[]> {
    return new Observable<Movie[]>(observer => {
      observer.next(this.movies);
    });
  }

  getMovieById(id: string): Movie{
    return this.movies.find(movie => {
      return movie.id === id;
    });
  }

}
