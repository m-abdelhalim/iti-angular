import { EventEmitter, Injectable } from '@angular/core';
import { CartList, Product } from '../_models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productAdded : EventEmitter<Product> = new EventEmitter<Product>()
  productRemoved:EventEmitter<Product>=new EventEmitter<Product>()
  cartChanged:EventEmitter<CartList[]>=new EventEmitter<CartList[]>()
  cartList: CartList[]=[]
  constructor() { }

  removeProductFromCart(product:Product){
    this.cartList=this.cartList.filter(item=>item.product!=product)
    // console.log(this.cartList);
    this.cartChanged.emit(this.cartList)
    
  }
  addProductToCart(product:Product){
    let count = 1,
    isExist = false;
    
  if (this.cartList.length > 0) {
    this.cartList.forEach((ele) => {
      if (ele.product?.name === product?.name) {
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
  this.cartChanged.emit(this.cartList)
  // // console.log("from app",this.cartList);

  // this.totalPrice=0
  //   this.cartList.forEach(item=>{
  //     this.totalPrice+=item.count*(item.product?.discount ? item.product?.price - item.product?.discount:item.product?.price)
  //   })
  //   // console.log("navbar-mid after content check",this.cartList);
    
  }
}
