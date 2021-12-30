import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RootComponent } from './root/root.component';
import { HeaderComponent } from './header/header.component';
import { ShoppinglistComponent } from './ListShopping/shoppinglist/shoppinglist.component';
import { ShippinglisteditComponent } from './ListShopping/shippinglistedit/shippinglistedit.component';
import { RecipelistComponent } from './RecipeBook/recipelist/recipelist.component';
import { RecipeitemComponent } from './RecipeBook/recipeitem/recipeitem.component';
import { RecipedetailComponent } from './RecipeBook/recipedetail/recipedetail.component';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    HeaderComponent,
    ShoppinglistComponent,
    ShippinglisteditComponent,
    RecipelistComponent,
    RecipeitemComponent,
    RecipedetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
