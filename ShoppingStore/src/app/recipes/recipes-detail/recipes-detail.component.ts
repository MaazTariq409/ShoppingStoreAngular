import { Component, Input, OnInit } from '@angular/core';
import { recipeService } from '../recipe.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecipeModel } from '../recipes.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  SelectedRecipe : RecipeModel
  id : number

  constructor(private shoppingListService : ShoppingListService, 
    private route : ActivatedRoute, 
    private recipeService : recipeService,
    private router : Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (param : Params) => 
      {
        this.id = +param['id'];
        this.SelectedRecipe = this.recipeService.getRecipeByID(this.id)
      }
    )
  }

  addIngredientToShopingList()
  {
    this.shoppingListService.getIngredient(this.SelectedRecipe.ingredients)
  }

  editRecipe()
  {
    this.router.navigate(['new'], {relativeTo : this.route})
  }
}
