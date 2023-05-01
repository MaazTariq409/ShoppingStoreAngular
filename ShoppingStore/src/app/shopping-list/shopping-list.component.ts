import { Component, OnInit, EventEmitter } from '@angular/core';
import { ingredientModel } from '../Shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './ngrx-store/shopping-list.reducer';
import { StartEdit } from './ngrx-store/shopping-list.action';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit {

  ingredients : Observable<{ingredients : ingredientModel[]}>

  constructor(
    private shoppingService : ShoppingListService, 
    private store: Store<AppState>
    ) { }

  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingList')
    // this.ingredients = this.shoppingService.getIngredients();
    // this.shoppingService.ingredientChanged.subscribe(
    //   (ingredients : ingredientModel[]) => {
    //     this.ingredients = ingredients;
    //   }
    // )
  }

  ingredientSelected(index : number)
  {
    this.store.dispatch(new StartEdit(index))
    // this.shoppingService.ingredientSelected.next(index) 
  }
}
