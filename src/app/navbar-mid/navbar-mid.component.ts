import { EventEmitter,Component, Input, OnInit, AfterViewInit, AfterViewChecked, OnChanges, SimpleChanges, AfterContentChecked, AfterContentInit } from '@angular/core';
// import {  } from 'stream';
import { CartList, Product } from '../models/product.model';
// import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-navbar-mid',
  templateUrl: './navbar-mid.component.html',
  styleUrls: ['./navbar-mid.component.scss']
})
export class NavbarMidComponent implements OnInit,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked {
  toggleDropDown=false

  @Input() 
  theAddedProduct !: Product;
  cartList : CartList[]=[]
    totalPrice!:number
  // rmItemFromCart:EventEmitter<Product>=new EventEmitter<Product>()
  removeFromCart(product:Product){
    // debugger
    this.cartList=this.cartList.filter(ele=>ele.product!=product)
    
    
  }


  
  constructor() { }
  ngAfterViewInit(): void {
    // console.log(this.theAddedProduct,"from after view init");
    
    // throw new Error('Method not implemented.');
     
  }
  ngAfterContentChecked(): void {
    // console.log(this.theAddedProduct,"from after content checked");
    
    // debugger
    // throw new Error('Method not implemented.');
    
    /* method 2 */
    let count = 1,
    isExist = false;
    const product=this.theAddedProduct
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
  
  // console.log("from app",this.cartList);

  this.totalPrice=0
    this.cartList.forEach(item=>{
      this.totalPrice+=item.count*(item.product?.discount ? item.product?.price - item.product?.discount:item.product?.price)
    })
    // console.log("navbar-mid after content check",this.cartList);
    

  }
  ngAfterContentInit(): void {
    // console.log(this.theAddedProduct,"from after content init");
    
    // throw new Error('Method not implemented.');
    // console.log("navbar-mid after content init",this.cartList);
    
    
  }
  ngOnChanges(): void {
    // console.log(this.theAddedProduct,"from on changes");
    
    // console.log("navbar-mid onchanges check",this.cartList);
   
    
  }
  

  ngAfterViewChecked(): void {
    // console.log(this.theAddedProduct,"from after view checked");
    
    // console.log("navbar-mid after view check",this.cartList);
    
    
  }
  
  
  ngOnInit(): void {
    // console.log(this.theAddedProduct,"from on init");
    

    

    // this.x++
    // console.log(this.x);
    // this.productService.itemAdded.subscribe()
  }

}
