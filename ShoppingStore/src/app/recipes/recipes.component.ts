import { Component, OnInit } from '@angular/core';
import { RecipeModel } from './recipes.model';
import { recipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [recipeService]
})
export class RecipesComponent implements OnInit {
  recipeSelected : RecipeModel;

  constructor(private recipeService : recipeService) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(
      (recipe : RecipeModel) => {
        this.recipeSelected = recipe
      }
    )
  }

}
