import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RecipeModel } from '../recipes.model';
import { recipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes : RecipeModel[] = [];

  constructor(private recipeService : recipeService,
    private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  newRecipe()
  {
    this.router.navigate(['new'], {relativeTo: this.route})
  }
}
