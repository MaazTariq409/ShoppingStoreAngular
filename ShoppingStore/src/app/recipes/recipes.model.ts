import { ingredientModel } from "../Shared/ingredient.model";

export class RecipeModel
{
    public name : string;
    public description : string;
    public imagePath : string;
    public ingredients : ingredientModel[]

    constructor(name:string, desc:string, imagePath :string, ingredient : ingredientModel[]) {
        this.name = name,
        this.description = desc,
        this.imagePath = imagePath,
        this.ingredients = ingredient
    }
}