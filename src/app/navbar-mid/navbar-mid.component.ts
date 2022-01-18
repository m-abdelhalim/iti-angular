import { Component, Input, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
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
  // theAddedProducts !: Product[];
  
  constructor() { }

  ngAfterViewChecked(): void {
    
    
  }

  ngOnInit(): void {
    
  }

}
