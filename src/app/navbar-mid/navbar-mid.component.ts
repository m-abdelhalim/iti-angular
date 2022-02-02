import { EventEmitter,Component, Input, OnInit, AfterViewInit, AfterViewChecked, OnChanges, SimpleChanges, AfterContentChecked, AfterContentInit } from '@angular/core';
// import {  } from 'stream';
import { CartList, Product } from '../_models/product.model';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-navbar-mid',
  templateUrl: './navbar-mid.component.html',
  styleUrls: ['./navbar-mid.component.scss']
})
export class NavbarMidComponent implements OnInit {
  toggleDropDown=false

  

  cartList = this.productService.cartList
    totalPrice!:number
  
  removeFromCart(product:any){
    this.productService.removeProductFromCart(product)
  }
  
  constructor(private productService:ProductService) { }
  

  
  ngOnInit(): void {
    this.productService.cartChanged.subscribe(
      (next)=>{
        this.cartList=next
        this.totalPrice=0
        this.cartList.forEach(item=>{
        this.totalPrice+=item.count*(item.product.discount ? item.product.price - item.product.discount:item.product.price)
    })
      },
      (error)=>{},
      ()=>{}
    )
  }
  
}
