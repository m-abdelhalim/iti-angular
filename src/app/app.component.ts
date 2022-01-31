import { Component } from '@angular/core';
// import { count } from 'console';
import { Product, CartList } from './_models/product.model';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'proj1';
  // addedProducts : Product[]=[];
  // addedProduct !: Product;
  cartList: CartList[] = [];
  onProductAdded(product: Product) {
    // this.addedProduct = product
    // this.addedProducts.push(product);
    // this.addedProducts=[...new Set<Product>(this.addedProducts)]
    let count = 1,
      isExist = false;
    if (this.cartList.length > 0) {
      this.cartList.forEach((ele) => {
        if (ele.product.title === product.title) {
          ele.count++;
          isExist = true;
        }
      });
      if(!isExist){
        this.cartList.push({ count, product });
      }
    } else  {
      this.cartList.push({ count, product });
    }
    
    // console.log(this.cartList);
  }
}
