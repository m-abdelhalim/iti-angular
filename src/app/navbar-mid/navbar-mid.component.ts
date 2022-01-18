import { EventEmitter,Component, Input, OnInit, AfterViewInit, AfterViewChecked, OnChanges, SimpleChanges, AfterContentChecked, AfterContentInit } from '@angular/core';
// import {  } from 'stream';
import { CartList, Product } from '../models/product.model';

@Component({
  selector: 'app-navbar-mid',
  templateUrl: './navbar-mid.component.html',
  styleUrls: ['./navbar-mid.component.scss']
})
export class NavbarMidComponent implements OnInit,AfterViewChecked,AfterContentInit {
  toggleDropDown=false

  @Input() 
  cartList !: CartList[]
    totalPrice =0
  // rmItemFromCart:EventEmitter<Product>=new EventEmitter<Product>()
  // theAddedProducts !: Product[];
  removeFromCart(product:any){
    // this.cartList=this.cartList.filter(ele=>)
    let itemTitle =product.target.parentElement.previousSibling.children[0].textContent;
    console.log(itemTitle);
    
    
  }
  
  constructor() { }
  ngAfterContentInit(): void {
    // throw new Error('Method not implemented.');
    
  }
  ngOnChanges(): void {
    
    
  }
  

  ngAfterViewChecked(): void {
    this.totalPrice=0
    this.cartList.forEach(item=>{
      this.totalPrice+=item.count*(item.product.discount ? item.product.price - item.product.discount:item.product.price)
    })
    
  }
  
  ngOnInit(): void {
    // this.x++
    // console.log(this.x);
  }

}
