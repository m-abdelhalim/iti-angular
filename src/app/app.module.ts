import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { NavbarMidComponent } from './navbar-mid/navbar-mid.component';
import { NavbarLowComponent } from './navbar-low/navbar-low.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductListContainerComponent } from './product-list-container/product-list-container.component';
// import { ProductService } from './_services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarTopComponent,
    NavbarMidComponent,
    NavbarLowComponent,
    NavbarComponent,
    ProductListComponent,
    ProductComponent,
    ProductListContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
