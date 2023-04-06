import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RecipeModel } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeDatatoAppComponent = new EventEmitter<RecipeModel>();


  recipies : RecipeModel[] = [
    new RecipeModel('Baryani', 'delicous rice recipe', 'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg'),
    new RecipeModel('Baryani', 'delicous rice recipe', 'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg')];
  constructor() { }

  ngOnInit(): void {
  }

  RecipeData(recipeElement : RecipeModel)
  {
    this.recipeDatatoAppComponent.emit(recipeElement)
  }

}
