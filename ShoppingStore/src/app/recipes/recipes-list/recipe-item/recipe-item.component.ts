import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecipeModel } from '../../recipes.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe : RecipeModel
  @Output() SendRecipeData = new EventEmitter<RecipeModel>()
  constructor() { }

  ngOnInit(): void {
  }

  ItemSelected()  
  {
    this.SendRecipeData.emit(this.recipe);
  }
}
