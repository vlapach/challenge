export interface Movie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface MovieDetailed extends Movie {
  Released: string;
  Actors: string;
  Metascore: string;
  imdbRating: string;
  Plot: string;
  Director: string;
}
