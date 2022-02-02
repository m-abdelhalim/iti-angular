import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { NavbarMidComponent } from './navbar-mid/navbar-mid.component';
import { NavbarLowComponent } from './navbar-low/navbar-low.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductListContainerComponent } from './product-list-container/product-list-container.component';
import { ProductService } from './_services/product.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarTopComponent,
    NavbarMidComponent,
    NavbarLowComponent,
    NavbarComponent,
    ProductListComponent,
    ProductComponent,
    ProductListContainerComponent,
    AddProductComponent,
    LoginComponent,
    RegisterComponent,
    ProductDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
