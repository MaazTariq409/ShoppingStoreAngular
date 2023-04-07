import { Component, OnInit } from '@angular/core';
import { ingredientModel } from '../Shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients : ingredientModel[] = [
    new ingredientModel("Apples", 5),
    new ingredientModel("Oranges", 8)
  ]
  constructor() { }

  ngOnInit(): void {
  }

  AddIngredient(ingredient:ingredientModel)
  {
    this.ingredients.push(ingredient)
  }
}
