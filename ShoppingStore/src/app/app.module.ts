import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppDropdownDirective } from './Shared/Directives/app-dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app.routing.module';
import { recipeService } from './recipes/recipe.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { SpinnerComponent } from './Shared/spinner/spinner.component'
import { authInterceptorService } from './authenticate/auth-interceptor.service';
import { shoppinglistModule } from './shopping-list/shopping-list.module';
import { recipeModule } from './recipes/recipe.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthenticateComponent,
    SpinnerComponent,
  ],
  
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    shoppinglistModule,
    recipeModule
  ],
  
  providers: [ShoppingListService, recipeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: authInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})

export class AppModule { }
