import { ingredientModel } from "../Shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService {

    ingredientChanged = new Subject<ingredientModel[]>();
    ingredientSelected = new Subject<number>();

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

    getSingleIngredient(index : number)
    {
        return this.ingredients[index];
    }

    updateIngredient(index: number, ingredient : ingredientModel)
    {
        this.ingredients[index] = ingredient
        this.ingredientChanged.next(this.ingredients.slice())
    }

    deleteIngredient(index : number)
    {
        this.ingredients.splice(0, 1);
        this.ingredientChanged.next(this.ingredients.slice());
    }
}