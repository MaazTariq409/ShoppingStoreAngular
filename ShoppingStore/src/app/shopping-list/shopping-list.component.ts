import { Component, OnInit, EventEmitter } from '@angular/core';
import { ingredientModel } from '../Shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit {

  ingredients : ingredientModel[] = []

  constructor(private shoppingService : ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.ingredientChanged.subscribe(
      (ingredients : ingredientModel[]) => {
        this.ingredients = ingredients;
      }
    )
  }
}
