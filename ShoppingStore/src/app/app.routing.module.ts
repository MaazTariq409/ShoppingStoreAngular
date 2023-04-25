import { NgModule } from "@angular/core";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { RouterModule, Routes } from "@angular/router";
import { RecipestartingpageComponent } from "./recipes/recipestartingpage/recipestartingpage.component";
import { RecipesDetailComponent } from "./recipes/recipes-detail/recipes-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { recipeResolver } from "./recipes/recipe-resolver.service";
import { AuthenticateComponent } from "./authenticate/authenticate.component";

const routes : Routes = [
    // {path : "" , component: RecipesComponent},
    {path : "" , redirectTo : "recipe", pathMatch : "full"},
    {path : "recipe", component: RecipesComponent,resolve :[recipeResolver], children: [
        { path : '' , component: RecipestartingpageComponent},
        { path : "new" , component: RecipeEditComponent},
        { path : ":id" , component: RecipesDetailComponent},
        { path : ":id/edit" , component: RecipeEditComponent}
    ]},
    {path : "shoppinglist", component: ShoppingListComponent},
    {path : 'auth' , component : AuthenticateComponent},
    // wildcard search for path and if not found then errorComponent will be displayed
    {path: "**" , component: PageNotFoundComponent}
  ]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}