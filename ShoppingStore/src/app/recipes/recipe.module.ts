import { NgModule } from "@angular/core";
import { RecipesComponent } from "./recipes.component";
import { RecipesListComponent } from "./recipes-list/recipes-list.component";
import { RecipesDetailComponent } from "./recipes-detail/recipes-detail.component";
import { RecipeItemComponent } from "./recipes-list/recipe-item/recipe-item.component";
import { RecipestartingpageComponent } from "./recipestartingpage/recipestartingpage.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { recipeRoutingModule } from "./recipe.routing.module";
import { AppDropdownDirective } from "../Shared/Directives/app-dropdown.directive";



@NgModule({
    declarations : [
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipeItemComponent,
    RecipestartingpageComponent,
    RecipeEditComponent,
    AppDropdownDirective
    ],
    imports: [
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        recipeRoutingModule,    
        ],
    exports : [
        AppDropdownDirective
    ]
})
export class recipeModule {

}