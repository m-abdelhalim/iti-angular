import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AddProductComponent } from "./add-product/add-product.component";
import { LoginComponent } from "./login/login.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductListContainerComponent } from "./product-list-container/product-list-container.component";
import { RegisterComponent } from "./register/register.component";

@NgModule({
    imports:[RouterModule.forRoot([
        {path:'home', component:ProductListContainerComponent},
        {path:'',redirectTo:'/home',pathMatch:'full'},
        {path:'product-details',component:ProductDetailsComponent},
        {path:'add',component:AddProductComponent},
        {path:'products',redirectTo:'/home'},
        {path:'login',component:LoginComponent},
        {path:'register',component:RegisterComponent},
        {path:'**', redirectTo:'/home'}
    ])],
    exports:[RouterModule]
})
export class AppRoutingModule{}