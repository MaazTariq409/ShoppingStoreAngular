import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthenticateComponent } from "./authenticate/authenticate.component";

const routes : Routes = [
    // {path : "" , component: RecipesComponent},
    {path : "" , redirectTo : "recipe", pathMatch : "full"},
    {path : 'auth' , component : AuthenticateComponent},
    // wildcard search for path and if not found then errorComponent will be displayed
    // {path: "**" , component: PageNotFoundComponent}
    { path : "recipe", loadChildren : ()=> import('./recipes/recipe.module').then(m => m.recipeModule) }
  ]

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {

}