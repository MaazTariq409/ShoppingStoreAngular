import { Component, OnDestroy, OnInit } from '@angular/core';
import { recipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [recipeService]
})
export class RecipesComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
  }

}
