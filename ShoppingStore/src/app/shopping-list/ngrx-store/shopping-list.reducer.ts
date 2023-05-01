import { Action } from "@ngrx/store";
import { ingredientModel } from "../../Shared/ingredient.model";
import * as shoppingListAction from "./shopping-list.action";


export interface State {
    ingredients: ingredientModel[];
    editedIngredient: ingredientModel;
    editedIngredientIndex: number;
}

export interface AppState {
    shoppingList : State
  }

const initialState: State = {
    ingredients: [new ingredientModel("Apples", 5),
    new ingredientModel("Oranges", 8)],
    editedIngredient: null,
    editedIngredientIndex: -1
};


export function shoppinglistReducer(state = initialState, action: shoppingListAction.shoppingListAction) {
    switch (action.type) {
        case shoppingListAction.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            }
        case shoppingListAction.ADD_INGREDIENTS:

            return {
                ...state,
                ingredients: [...state.ingredients, ...action.payload]
            }
        case shoppingListAction.UPDATE_INGREDIENT:
            // const ingredient = state.ingredients[action.payload.index]

            // const updateIngredient = {
            //     ...ingredient,
            //     ...action.payload.ingredient
            // }

            // const updateIngredients = [...state.ingredients];
            // updateIngredient[action.payload.index] = updateIngredient

            const ingredient = state.ingredients[state.editedIngredientIndex];
            const updatedIngredient = {
                ...ingredient,
                ...action.payload.ingredient
            };
            const updateIngredients = [...state.ingredients];
            updateIngredients[state.editedIngredientIndex] = updatedIngredient;

            return {
                ...state,
                ingredients: updateIngredients,
                editedIngredientIndex: -1,
                editedIngredient: null
            }

        case shoppingListAction.DELETE_INGREDIENT:
            return {
                // ...state,
                // ingredients: state.ingredients.filter((ingredient, index) => {
                //     return ingredient[index] !== action.payload
                // }),

                ...state,
                ingredients: state.ingredients.filter((ig, igIndex) => {
                    return igIndex !== state.editedIngredientIndex;
                }),
                editedIngredientIndex: -1,
                editedIngredient: null
            }
        case shoppingListAction.START_EDIT:
            return {
                ...state,
                editedIngredientIndex: action.payload,
                editedIngredient: { ...state.ingredients[action.payload] }
            };
        case shoppingListAction.STOP_EDIT:
            return {
                ...state,
                editedIngredient: null,
                editedIngredientIndex: -1
            };
        default:
            return state;
    }
}