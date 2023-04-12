import { ingredientModel } from "../Shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService {

    ingredientChanged = new Subject<ingredientModel[]>();

    ingredients: ingredientModel[] = [
        new ingredientModel("Apples", 5),
        new ingredientModel("Oranges", 8)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: ingredientModel) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    getIngredient(ingredient : ingredientModel[])
    {
        this.ingredients.push(...ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
    }
}