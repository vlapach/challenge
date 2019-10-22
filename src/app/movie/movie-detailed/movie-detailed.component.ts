import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Movie, MovieDetailed} from '../../model/movie';

@Component({
  selector: 'app-movie-detailed',
  templateUrl: './movie-detailed.component.html',
  styleUrls: ['./movie-detailed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailedComponent implements OnInit {

  @Input() movie: MovieDetailed;
  constructor() { }

  ngOnInit() {
  }

  checkByEmpty(data: string): boolean {
    return data !== 'N/A' ;
  }
}
