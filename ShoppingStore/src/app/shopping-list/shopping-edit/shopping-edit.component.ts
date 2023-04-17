import { Component, EventEmitter, OnInit, ViewChild, Output } from '@angular/core';
import { ingredientModel } from 'src/app/Shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f') editForm: NgForm
  ingredentIndex: number
  editIngredient: ingredientModel
  editMode: boolean

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit(): void {
    this.shoppingService.ingredientSelected.subscribe(
      (index) => {
        this.ingredentIndex = index
        this.editMode = true
        this.editIngredient = this.shoppingService.getSingleIngredient(index)
        this.editForm.setValue({
          name: this.editIngredient.name,
          amount: this.editIngredient.amount
        })
      }
    )
  }

  IngredientAdded(data: NgForm) {
    const ingredient = new ingredientModel(data.value.name, data.value.amount);
    if (this.editMode) {
      this.shoppingService.updateIngredient(this.ingredentIndex, ingredient)
    }
    else {
      this.shoppingService.addIngredient(ingredient);
    }
    this.editMode = false
    this.editForm.reset()
  }

  onClear()
  {
    this.editForm.reset()
    this.editMode = false
  }

  onDelete(){
    this.shoppingService.deleteIngredient(this.ingredentIndex)
    this.editMode = false
    this.editForm.reset()
  }
}
