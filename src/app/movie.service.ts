import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient,
  ) {
  }


  searchMovie(value: string): Observable<any> {
    const data = {
      apikey: environment.API_KEY,
      s: value
    };
    return this.httpClient.get<any>(`https://${environment.API_URL}`, {params: data});
  }
  searchDetailedMovie(value: string): Observable<any> {
    const data = {
      apikey: environment.API_KEY,
      i: value,
      plot: 'full'
    };
    return this.httpClient.get<any>(`https://${environment.API_URL}`, {params: data});
  }
}
