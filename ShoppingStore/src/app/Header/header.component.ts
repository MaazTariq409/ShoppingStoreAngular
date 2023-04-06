import { Component , Output, EventEmitter} from "@angular/core";

@Component({
    selector: "header-component",
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent{
    @Output() feature = new EventEmitter<string>();

    onRecipeClick(featureTab)
    {
        this.feature.emit(featureTab);
    }
}