import { Component, OnInit } from '@angular/core';
import { RecipeModel } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeSelected : RecipeModel;

  constructor() { }

  ngOnInit(): void {
  }

  recipeDataToDetails(RecipeData : RecipeModel)
  {
    this.recipeSelected = RecipeData
  }

}
