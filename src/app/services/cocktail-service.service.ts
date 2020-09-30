import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  favorites: object[];

  constructor(private http: HttpClient) {}

  search(searchParam) {
    return this.http.get(`${BASE_URL}/search.php?s=${searchParam}`);
  }

  random() {
    return this.http.get(`${BASE_URL}/random.php`);
  }
}
