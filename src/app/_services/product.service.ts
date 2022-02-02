import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { CartList, Product } from '../_models/product.model';
import {environment as env} from 'src/environments/environment'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // productAdded : EventEmitter<Product> = new EventEmitter<Product>()
  // productRemoved:EventEmitter<Product>=new EventEmitter<Product>()
  cartChanged:EventEmitter<CartList[]>=new EventEmitter<CartList[]>()
  productsChanged:EventEmitter<Product[]>=new EventEmitter<Product[]>()
  cartList: CartList[]=[]
  products :Product[] =[]
  // isFirst=true
  /* products :Product[] = [
    {
      title: 'Product 1001',
      price:200,
      discount:20,
      image:"https://picsum.photos/seed/1/300",
      description:"",
      category:"",
      id:10
    },
    {
      title: 'Product 1002',
      price:100,
      image:"https://picsum.photos/seed/picsum/300",
      description:"",
      category:"",
      id:20
    },
    {
      title: 'Product 1003',
      price:150,
      image:"https://picsum.photos/seed/picsum/300",
      description:"",
      category:"",
      id:30
    },
    {
      title: 'Product 1004',
      price:100,
      discount:20,
      image:"https://picsum.photos/seed/picsum/300",
      description:"",
      category:"",
      id:40
    },
    {
      title: 'Product 1005',
      price:150,
      discount:20,
      image:"https://picsum.photos/seed/picsum/300",
      description:"",
      category:"",
      id:50
    },
    {
      title: 'Product 1006',
      price:300,
      image:"https://picsum.photos/seed/picsum/300",
      description:"",
      category:"",
      id:60
    }
  ] */
  constructor(private httpClient: HttpClient) { }


  // ------------------ cart---------------------
  removeProductFromCart(product:Product){
    this.cartList=this.cartList.filter(item=>item.product!=product)
    // console.log(this.cartList);
    this.cartChanged.emit(this.cartList)
    
  }
  addProductToCart(count:number, product:Product){
    
    let isExist = false;
    
  if (this.cartList.length > 0) {
    this.cartList.forEach((ele) => {
      if (ele.product?.title === product?.title) {
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
  //   // console.log("navbar-mid 0after content check",this.cartList);
    
  }

  getProductBytitle(title:string):Product{
    // debugger
    const p = this.products.find(item=>item.title == title)
    // console.log(p);
    return p!
    
  }
  getProductById(id:number):Observable<Product>{
    return this.httpClient.get<Product>(`${env.baseUrl}/products/${id}` );
    
  }
  getProductByCategory(cat:string,limit:number):Observable<Product[]>{
    if(limit>0){

      return this.httpClient.get<Product[]>(`${env.baseUrl}/products/category/${cat}?limit=${limit}` );
    }
    return this.httpClient.get<Product[]>(`${env.baseUrl}/products/category/${cat}` );
    
  }
  getAllCategories():Observable<[]>{
    return this.httpClient.get<[]>(`${env.baseUrl}/products/categories` );

  }
  
  getAllProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${env.baseUrl}/products` );
    // return this.products
  }
  

  addNewProduct(p:Product):Observable<{}>{
    return this.httpClient.post<{}>(`${env.baseUrl}/products`,{
      body:JSON.stringify(p )
    })
    
  }
  login(u:{}):Observable<any>{
    // console.log(JSON.stringify(u ));
    
    return this.httpClient.post(`${env.baseUrl}/auth/login`,{
      body:JSON.stringify(u )
    })
    
  }

}
