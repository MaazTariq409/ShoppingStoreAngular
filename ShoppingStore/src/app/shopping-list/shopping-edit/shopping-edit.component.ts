import { Component, EventEmitter, OnInit, ViewChild, Output } from '@angular/core';
import { ingredientModel } from 'src/app/Shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static:true}) IngredientName
  @ViewChild('amountInput', {static:true}) IngredientAmount

  constructor(private shoppingService : ShoppingListService) { }

  ngOnInit(): void {
  }
  
  IngredientAdded()
  {
    const ingName = this.IngredientName.nativeElement.value;
    const ingAmount = this.IngredientAmount.nativeElement.value;
    const ingredient = new ingredientModel(ingName,ingAmount);
    this.shoppingService.addIngredient(ingredient);
  }
}
