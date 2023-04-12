import { RecipeModel } from "./recipes.model";
import { ingredientModel } from "../Shared/ingredient.model";
import { Subject } from "rxjs";

export class recipeService {
    recipeSelected = new Subject<RecipeModel>();

    recipies: RecipeModel[] = [
        new RecipeModel('Baryani',
        'delicous rice recipe',
        'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg',
        [new ingredientModel("Rice", 5),
        new ingredientModel("vegetables", 2)]),

        new RecipeModel('Baryani 2.0', 
        'New version of delicous rice recipe', 
        'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg',
        [new ingredientModel("Special Rice", 5),
        new ingredientModel("vegetables", 2)])];

    getRecipes()
    {
        return this.recipies.slice();
    }

    getRecipeByID(id: number)
    {
        return this.recipies[id];
    }

}