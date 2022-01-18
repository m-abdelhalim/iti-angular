import { EventEmitter,Component, Input, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
// import {  } from 'stream';
import { CartList, Product } from '../models/product.model';

@Component({
  selector: 'app-navbar-mid',
  templateUrl: './navbar-mid.component.html',
  styleUrls: ['./navbar-mid.component.scss']
})
export class NavbarMidComponent implements OnInit,AfterViewChecked {
  toggleDropDown=false

  @Input() 
  cartList !: CartList[]

  // rmItemFromCart:EventEmitter<Product>=new EventEmitter<Product>()
  // theAddedProducts !: Product[];
  removeFromCart(product:any){
    // this.cartList=this.cartList.filter(ele=>)
    let itemTitle =product.target.parentElement.previousSibling.children[0].textContent;
    console.log(itemTitle);
    
    
  }
  
  constructor() { }

  ngAfterViewChecked(): void {
    
    
  }

  ngOnInit(): void {
    
  }

}
