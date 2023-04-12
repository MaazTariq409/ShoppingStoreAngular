import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecipeModel } from '../../recipes.model';
import { recipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe : RecipeModel
  @Input() index : number

  constructor(private recipeService : recipeService) { }

  ngOnInit(): void {
  }

  ItemSelected()  
  {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
