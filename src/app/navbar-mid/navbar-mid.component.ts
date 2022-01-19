import { EventEmitter,Component, Input, OnInit, AfterViewInit, AfterViewChecked, OnChanges, SimpleChanges, AfterContentChecked, AfterContentInit } from '@angular/core';
// import {  } from 'stream';
import { CartList, Product } from '../_models/product.model';

@Component({
  selector: 'app-navbar-mid',
  templateUrl: './navbar-mid.component.html',
  styleUrls: ['./navbar-mid.component.scss']
})
export class NavbarMidComponent implements OnInit,AfterViewChecked,AfterContentInit,AfterContentChecked {
  toggleDropDown=false

  @Input() 
  cartList !: CartList[]
    totalPrice!:number
  // rmItemFromCart:EventEmitter<Product>=new EventEmitter<Product>()
  // theAddedProducts !: Product[];
  removeFromCart(event:any){
    // this.cartList=this.cartList.filter(ele=>)
    let itemTitle:string =event.target.parentElement.previousSibling?.children[0]?.textContent;
    console.log((itemTitle.indexOf("X")));
    
    
  }
  
  constructor() { }
  ngAfterContentChecked(): void {
    // throw new Error('Method not implemented.');
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
    // this.x++
    // console.log(this.x);
  }

}
