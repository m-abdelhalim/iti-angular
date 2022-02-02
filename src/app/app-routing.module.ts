import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AddProductComponent } from "./add-product/add-product.component";
import { LoginComponent } from "./login/login.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductListContainerComponent } from "./product-list-container/product-list-container.component";
import { RegisterComponent } from "./register/register.component";

@NgModule({
    imports:[RouterModule.forRoot([
        // {path:'home', component:ProductListContainerComponent},
        {path:'',redirectTo:'/products/page/1',pathMatch:'full'},
        {path:'products', children:[
            {path:':productId/details',component:ProductDetailsComponent},
            {path:'page/:pageNumber', component:ProductListContainerComponent},
            
            {path:'', redirectTo:'/products/page/1',pathMatch:'full'}
        ]},
        
        {path:'category', children:[

            {path:':categoryName/page/:pageNumber', component:ProductListContainerComponent},
            {path:':categoryName', redirectTo:'/category/:categoryName/page/1',pathMatch:'full'},

        ]},
        {path:'add',component:AddProductComponent},
        {path:'login',component:LoginComponent},
        {path:'register',component:RegisterComponent},
        {path:'**', redirectTo:'/products/page/1'}
    ], {scrollPositionRestoration: 'enabled'})],
    exports:[RouterModule]
})
export class AppRoutingModule{}