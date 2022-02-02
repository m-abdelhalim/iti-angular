import { Component, Input, OnInit } from '@angular/core';
import { CartList, Product } from '../_models/product.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() 
  // cartList !: CartList[]
  theAddedProduct !: Product;
  
  constructor() { }

  ngOnInit(): void {
  }

}
