import { NgModule } from "@angular/core";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent,
    ],
    imports : [
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            {path : "shoppinglist", component: ShoppingListComponent},
        ])
    ]
})
export class shoppinglistModule {

}