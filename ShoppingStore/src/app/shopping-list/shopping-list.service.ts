import { EventEmitter } from "@angular/core";
import { ingredientModel } from "../Shared/ingredient.model";

export class ShoppingListService {

    ingredientChanged = new EventEmitter<ingredientModel[]>();

    ingredients: ingredientModel[] = [
        new ingredientModel("Apples", 5),
        new ingredientModel("Oranges", 8)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: ingredientModel) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    getIngredient(ingredient : ingredientModel[])
    {
        this.ingredients.push(...ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }
}