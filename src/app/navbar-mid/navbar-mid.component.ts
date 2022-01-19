import { EventEmitter,Component, Input, OnInit, AfterViewInit, AfterViewChecked, OnChanges, SimpleChanges, AfterContentChecked, AfterContentInit } from '@angular/core';
// import {  } from 'stream';
import { CartList, Product } from '../_models/product.model';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-navbar-mid',
  templateUrl: './navbar-mid.component.html',
  styleUrls: ['./navbar-mid.component.scss']
})
export class NavbarMidComponent implements OnInit,AfterViewChecked,AfterContentInit,AfterContentChecked {
  toggleDropDown=false

  // @Input() 
  // cartList !: CartList[]

  cartList = this.productService.cartList
    totalPrice!:number
  // rmItemFromCart:EventEmitter<Product>=new EventEmitter<Product>()
  // theAddedProducts !: Product[];
  removeFromCart(product:any){
    // this.cartList=this.cartList.filter(ele=>)
    // let itemTitle:string =event.target.parentElement.previousSibling?.children[0]?.textContent;
    // console.log((itemTitle.indexOf("X")));
    
    // this.productService.productRemoved.subscribe(
    //   (next)=>{
    //     this.productService.removeProductFromCart(product)
    //   }
    // )
    this.productService.removeProductFromCart(product)
  }
  
  constructor(private productService:ProductService) { }
  ngAfterContentChecked(): void {
    // throw new Error('Method not implemented.');
    this.cartList=this.productService.cartList
    this.totalPrice=0
    this.cartList.forEach(item=>{
      this.totalPrice+=item.count*(item.product.discount ? item.product.price - item.product.discount:item.product.price)
    })
  }
  ngAfterContentInit(): void {
    // throw new Error('Method not implemented.');
    
  }
  ngOnChanges(): void {
    
    
  }
  

  ngAfterViewChecked(): void {
    
    
  }
  
  ngOnInit(): void {
    this.productService.productAdded.subscribe(
      (next)=>{
        this.productService.addProductToCart(next)
        
      },
      (error)=>{},
      ()=>{}
    )
  }
  
}
