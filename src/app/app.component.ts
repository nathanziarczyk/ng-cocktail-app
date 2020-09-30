import { Component, OnInit } from '@angular/core';
import { CocktailService } from './services/cocktail-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'cocktail-time';

  constructor(private cocktailService: CocktailService) {}

  ngOnInit() {
    this.cocktailService.search('margarita').subscribe(console.log);
  }
}
