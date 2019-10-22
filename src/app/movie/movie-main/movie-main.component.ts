import {Component, OnDestroy, OnInit} from '@angular/core';
import {debounceTime, takeUntil} from 'rxjs/operators';
import {distinctUntilChanged} from 'rxjs/internal/operators/distinctUntilChanged';
import {FormControl} from '@angular/forms';
import {Subject} from 'rxjs';
import {MovieService} from '../../movie.service';
import {Movie, MovieDetailed} from '../../model/movie';

@Component({
  selector: 'app-movie-main',
  templateUrl: './movie-main.component.html',
  styleUrls: ['./movie-main.component.scss']
})
export class MovieMainComponent implements OnInit, OnDestroy {

  movieList: Movie[] = [];
  movieInput: FormControl = new FormControl();
  movieDetailed: MovieDetailed;
  private _onDestroy = new Subject<void>();
  private _onCancelSearch = new Subject<void>();

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.initSearchField();
  }

  initSearchField(): void {
    this.movieInput.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      takeUntil(this._onDestroy)
    ).subscribe((value) => {
      if (value && typeof value === 'string') {
        value = value.toLowerCase();
        this._onCancelSearch.next();
        this.movieService.searchMovie(value).pipe(
          takeUntil(this._onCancelSearch),
        ).subscribe(
          (response) => {
            if (response.Response === 'True') {
              this.movieList = response.Search;
            }
        }, );
      } else {
        this.movieList = [];
      }
    });
  }

  getDetailedMovie(movie: Movie) {
    this.movieService.searchDetailedMovie(movie.imdbID).subscribe( result => {
      if (result) {
        this.movieDetailed = result;
      }
    });
  }

  returnPoster(movie: Movie) {
    return movie.Poster !== 'N/A' ? movie.Poster : 'assets/images.png';
  }

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onCancelSearch.next();
    this._onDestroy.complete();
    this._onCancelSearch.complete();
  }
}
