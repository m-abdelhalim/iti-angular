import { EventEmitter, Injectable } from '@angular/core';
import { CartList, Product } from '../_models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // productAdded : EventEmitter<Product> = new EventEmitter<Product>()
  // productRemoved:EventEmitter<Product>=new EventEmitter<Product>()
  cartChanged:EventEmitter<CartList[]>=new EventEmitter<CartList[]>()
  cartList: CartList[]=[]
  products :Product[] = [
    {
      name: 'Product 1001',
      price:200,
      discount:20,
      imageUrl:"https://picsum.photos/seed/1/300",
      description:""
    },
    {
      name: 'Product 1002',
      price:100,
      imageUrl:"https://picsum.photos/seed/picsum/300",
      description:""
    },
    {
      name: 'Product 1003',
      price:150,
      imageUrl:"https://picsum.photos/seed/picsum/300",
      description:""
    },
    {
      name: 'Product 1004',
      price:100,
      discount:20,
      imageUrl:"https://picsum.photos/seed/picsum/300",
      description:""
    },
    {
      name: 'Product 1005',
      price:150,
      discount:20,
      imageUrl:"https://picsum.photos/seed/picsum/300",
      description:""
    },
    {
      name: 'Product 1006',
      price:300,
      imageUrl:"https://picsum.photos/seed/picsum/300",
      description:""
    }
  ]
  constructor() { }

  removeProductFromCart(product:Product){
    this.cartList=this.cartList.filter(item=>item.product!=product)
    // console.log(this.cartList);
    this.cartChanged.emit(this.cartList)
    
  }
  addProductToCart(count:number, product:Product){
    
    let isExist = false;
    
  if (this.cartList.length > 0) {
    this.cartList.forEach((ele) => {
      if (ele.product?.name === product?.name) {
        ele.count+=count;
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

  getProductByName(name:string):Product{
    // debugger
    const p = this.products.find(item=>item.name == name)
    // console.log(p);
    return p!
    
  }
  
  getAllProducts(){
    return this.products
  }

}
