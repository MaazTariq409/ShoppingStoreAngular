import { Component, EventEmitter, OnInit, ViewChild, Output } from '@angular/core';
import { ingredientModel } from 'src/app/Shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredient = new EventEmitter<ingredientModel>();
  @ViewChild('nameInput', {static:true}) IngredientName
  @ViewChild('amountInput', {static:true}) IngredientAmount

  constructor() { }

  ngOnInit(): void {
  }
  IngredientAdded()
  {
    const ingName = this.IngredientName.nativeElement.value;
    const ingAmount = this.IngredientAmount.nativeElement.value;
    const ingredient = new ingredientModel(ingName,ingAmount);
    this.ingredient.emit(ingredient)
  }
}
