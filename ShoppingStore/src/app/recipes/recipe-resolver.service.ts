import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { RecipeModel } from "./recipes.model";
import { Observable } from "rxjs";
import { DataStorageService } from "../Shared/data-storage.service";
import { recipeService } from "./recipe.service";

@Injectable({
    providedIn : 'root'
})
export class recipeResolver implements Resolve<RecipeModel[]> {

    constructor(private storageService : DataStorageService, private recipeService : recipeService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const recipe = this.recipeService.getRecipes();
        if(recipe.length === 0)
        {
            return this.storageService.fetchRecipe();
        }
        else
        {
            return recipe
        }
         
    }
}   