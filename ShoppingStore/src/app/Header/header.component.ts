import { Component , Output, EventEmitter} from "@angular/core";
import { DataStorageService } from "../Shared/data-storage.service";

@Component({
    selector: "header-component",
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
    @Output() feature = new EventEmitter<string>();

    constructor(private storageService : DataStorageService) {}

    onRecipeClick(featureTab)
    {
        this.feature.emit(featureTab);
    }

    storeRecipeData()
    {
        this.storageService.storeRecipes();
    }

    fetchRecipeData()
    {
        this.storageService.fetchRecipe().subscribe();
    }
}