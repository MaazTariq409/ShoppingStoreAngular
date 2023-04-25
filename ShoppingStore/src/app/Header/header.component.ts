import { Component , Output, EventEmitter, OnInit} from "@angular/core";
import { DataStorageService } from "../Shared/data-storage.service";
import { authenticateService } from "../authenticate/authenticate.service";

@Component({
    selector: "header-component",
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
isAuthenticated = false

    constructor(private storageService : DataStorageService, private authService : authenticateService) {}

    ngOnInit(){
        this.authService.user.subscribe(user => {
            this.isAuthenticated = !!user
        });
    }

    storeRecipeData()
    {
        this.storageService.storeRecipes();
    }

    fetchRecipeData()
    {
        console.log("Response Data");
        this.storageService.fetchRecipe().subscribe();
    }

    logout(){
        this.authService.logout();
    }
}