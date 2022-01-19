import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../_models/product.model';

@Component({
  selector: 'app-product-list-container',
  templateUrl: './product-list-container.component.html',
  styleUrls: ['./product-list-container.component.scss']
})
export class ProductListContainerComponent implements OnInit {

  @Output()
  productAdded:EventEmitter<Product> = new EventEmitter<Product>();


  onProductAdded(product:Product){
    this.productAdded.emit(product)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
