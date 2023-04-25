import { NgModule } from "@angular/core";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { recipeResolver } from "./recipe-resolver.service";
import { RecipesDetailComponent } from "./recipes-detail/recipes-detail.component";
import { RecipesComponent } from "./recipes.component";
import { RecipestartingpageComponent } from "./recipestartingpage/recipestartingpage.component";
import { PreloadAllModules, PreloadingStrategy, Route, RouterModule, Routes } from "@angular/router";

const routes : Routes = [
    {path : "", component: RecipesComponent, children: [
        { path : '' , component: RecipestartingpageComponent, resolve :[recipeResolver]},
        { path : "new" , component: RecipeEditComponent , resolve :[recipeResolver]},
        { path : ":id" , component: RecipesDetailComponent , resolve :[recipeResolver]},
        { path : ":id/edit" , component: RecipeEditComponent , resolve :[recipeResolver]}
    ]}
]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class recipeRoutingModule {

}
