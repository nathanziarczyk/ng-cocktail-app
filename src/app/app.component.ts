import { Component, OnInit } from '@angular/core';
import { Cocktail } from './models/cocktail.model';
import { CocktailService } from './services/cocktail-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  drinks: Cocktail[];
  loading: boolean = false;

  constructor(private cocktailService: CocktailService) {}

  ngOnInit() {
    this.loading = true;
    this.cocktailService.search('margarita').subscribe((data) => {
      console.log(data);
    });
  }
}
