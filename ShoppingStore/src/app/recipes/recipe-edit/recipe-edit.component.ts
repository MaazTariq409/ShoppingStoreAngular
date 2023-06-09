import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { recipeService } from '../recipe.service';
import { RecipeModel } from '../recipes.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id : number
  editMode : boolean = false

  get recipeControls() {
    return (this.reactiveForm.get('ingredients') as FormArray).controls
  }

  reactiveForm : FormGroup

  constructor(private route : ActivatedRoute, private recipeService : recipeService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (parems : Params) => {
        this.id = +parems['id'];
        this.editMode = parems['id'] != null;
        this.initForm();
      }
    )
  }

  private initForm(){
    let name = '';
    let imageUrl = '';
    let description = '';
    let recipeIngredients = new FormArray([]);

    if(this.editMode)
    {
      const recipe = this.recipeService.getRecipeByID(this.id)
      name = recipe.name
      imageUrl = recipe.imagePath
      description = recipe.description

      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          );
        }
      }
    }

    this.reactiveForm = new FormGroup({
      name : new FormControl(name, Validators.required),
      imagePath : new FormControl(imageUrl, Validators.required),
      description : new FormControl(description, Validators.required),
      ingredients : recipeIngredients
    })
  }

  onSubmit()
  {
    // const newRecipe = new RecipeModel(
    //   this.reactiveForm.value['name'],
    //   this.reactiveForm.value['description'],
    //   this.reactiveForm.value['imagePath'],
    //   this.reactiveForm.value['ingredients']);
    if(this.editMode){
      this.recipeService.updateIngredient(this.id, this.reactiveForm.value)
    }
    else
    {
      this.recipeService.AddIngredient(this.reactiveForm.value)
    }
    this.onCancel()
  }

  addingredient()
  {
    (<FormArray>this.reactiveForm.get('ingredients')).push(
      new FormGroup({
        'name' : new FormControl(null, Validators.required),
        'amount' : new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route})
  }

  onDeleteIngredient(index: number)
  {
    (<FormArray>this.reactiveForm.get('ingredients')).removeAt(index);
  }
}

