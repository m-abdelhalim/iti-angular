import { Component } from '@angular/core';
// import { count } from 'console';
import { Product,CartList } from './models/product.model';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proj1';
  // addedProducts : Product[]=[];
  // addedProduct !: Product;
  cartList : CartList[]= []
  onProductAdded(product:Product){
    // this.addedProduct = product
    // this.addedProducts.push(product);
    // this.addedProducts=[...new Set<Product>(this.addedProducts)]
    let count = 1
    if(this.cartList.length){
    this.cartList.forEach(ele=>{
      
      if(ele.product.name===product.name){
          ele.count++
      }
      else{
        ele.count=0
      }
      
    })}
    else{
    this.cartList.push({count,product})
    }
    console.log(this.cartList);
  }
  
}
