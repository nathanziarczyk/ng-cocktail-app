import {
  HttpClient,
  HttpClientModule,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Cocktail } from '../models/cocktail.model';

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  favorites: object[];

  constructor(private http: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Cliënt side or network problem');
      return throwError('Client side or network problem');
    } else {
      console.error('Server problem');
      return throwError('Server problem');
    }
  }

  search(searchParam) {
    return this.http
      .get<Cocktail>(`${BASE_URL}/search.php?s=${searchParam}`, {
        observe: 'response',
      })
      .pipe(catchError(this.handleError));
  }

  random() {
    return this.http.get(`${BASE_URL}/random.php`);
  }
}
