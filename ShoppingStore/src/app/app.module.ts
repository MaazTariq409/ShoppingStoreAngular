import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipeItemComponent } from './recipes/recipes-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppDropdownDirective } from './Shared/Directives/app-dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app.routing.module';
import { RecipestartingpageComponent } from './recipes/recipestartingpage/recipestartingpage.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { recipeService } from './recipes/recipe.service';

const routes : Routes = [
  // {path : "" , component: RecipesComponent},
  {path : "" , redirectTo : "recipe", pathMatch : "full"},
  {path : "recipe", component: RecipesComponent},
  {path : "shoppinglist", component: ShoppingListComponent},
  // wildcard search for path and if not found then errorComponent will be displayed
  {path: "**" , component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    AppDropdownDirective,
    PageNotFoundComponent,
    RecipestartingpageComponent,
    RecipeEditComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService, recipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
