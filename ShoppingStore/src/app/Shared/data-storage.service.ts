import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs/operators"
import { recipeService } from "../recipes/recipe.service";
import { RecipeModel } from "../recipes/recipes.model";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {

    constructor(private http: HttpClient, private recipeService: recipeService) { }

    fetchRecipe() {
        return this.http.get<RecipeModel[]>("https://angular-project-fae07-default-rtdb.firebaseio.com/recipes.json")
            .pipe(map(recipes => {
                return recipes.map(recipe => {
                    return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
                })
            }
            ),
                tap(recipeData => {
                    this.recipeService.setRecipe(recipeData);
                }))
    }

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        return this.http.put("https://angular-project-fae07-default-rtdb.firebaseio.com/recipes.json",
            recipes).subscribe(response => {
                console.log(response)
            })
    }
}