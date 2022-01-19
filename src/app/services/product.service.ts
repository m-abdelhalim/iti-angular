import { EventEmitter, Injectable } from '@angular/core';
import { CartList, Product } from '../_models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productAdded : EventEmitter<Product> = new EventEmitter<Product>()

  cartList: CartList[]=[]
  constructor() { }

  addProductToCart(product:Product){
    
  }
}
