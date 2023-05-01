import { Component, EventEmitter, OnInit, ViewChild, Output, OnDestroy } from '@angular/core';
import { ingredientModel } from 'src/app/Shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as shoppingListAction from '../ngrx-store/shopping-list.action';
import { AppState } from '../ngrx-store/shopping-list.reducer';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') editForm: NgForm
  ingredentIndex: number
  editIngredient: ingredientModel
  editMode: boolean

  constructor(
    private shoppingService: ShoppingListService, 
    private store : Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('shoppingList').subscribe(stateData => {
      if(stateData.editedIngredientIndex > -1) {
        this.editMode = true
        this.editIngredient = stateData.editedIngredient
        this.editForm.setValue({
          name: this.editIngredient.name,
          amount: this.editIngredient.amount
        })
      }else {
        this.editMode = false
      }
    })
  }

  IngredientAdded(data: NgForm) {
    const ingredient = new ingredientModel(data.value.name, data.value.amount);
    if (this.editMode) {
      this.store.dispatch(new shoppingListAction.UpdateIngredient({
        ingredient: ingredient
      }))
      // this.shoppingService.updateIngredient(this.ingredentIndex, ingredient)
    }
    else {
      this.store.dispatch(new shoppingListAction.AddIngredient(ingredient));
      // this.shoppingService.addIngredient(ingredient);
    }
    this.editMode = false
    this.editForm.reset()
  }

  onClear()
  {
    this.editForm.reset()
    this.editMode = false
    this.store.dispatch(new shoppingListAction.StopEdit());
  }

  onDelete(){
    this.store.dispatch(new shoppingListAction.DeleteIngredient(this.ingredentIndex))
    // this.shoppingService.deleteIngredient(this.ingredentIndex)
    this.editMode = false
    this.editForm.reset()
  }

  ngOnDestroy(){
    this.store.dispatch(new shoppingListAction.StopEdit());
  }
}
