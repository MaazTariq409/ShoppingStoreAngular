import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { exhaustMap, map, take, tap } from "rxjs/operators"
import { recipeService } from "../recipes/recipe.service";
import { RecipeModel } from "../recipes/recipes.model";
import { authenticateService } from "../authenticate/authenticate.service";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {

    constructor(private http: HttpClient, 
        private recipeService: recipeService, 
        private authService : authenticateService) { }

    fetchRecipe() {
            return this.http.get<RecipeModel[]>(
                "https://shopping-store-b16cf-default-rtdb.firebaseio.com/recipes.json",

            )
            .pipe(
            map(recipes => {
                return recipes.map(recipe => {
                    return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
                });
            }),
            tap(recipeData => {
                this.recipeService.setRecipe(recipeData);
            }));
    }


    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        return this.http.put("https://shopping-store-b16cf-default-rtdb.firebaseio.com/recipes.json",
            recipes).subscribe(response => {
                console.log(response)
            })
    }
}