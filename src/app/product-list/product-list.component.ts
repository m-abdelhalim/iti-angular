import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Product } from '../_models/product.model';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  
  // products!:any
  // getProducts:Promise<string> = fetch('https://dummyjson.com/products/')
  // .then(res => res.json())
  // .then(json => this.products = json);

  // async getProd():Promise<void>{
  //    await fetch('https://dummyjson.com/products/')
  //   .then(res => res.json()).then(json => this.products=json)
  //   // console.log(this.products);
    
  // }
 
  
  productArr !:Product[]

  @Output()
  productAdded:EventEmitter<Product> = new EventEmitter<Product>();
  onProductAdded(product:Product){
    // console.log(product);
    this.productAdded.emit(product)
  }
  constructor(private productService : ProductService) { 
 
  }

  ngOnInit(): void {
    this.productArr = this.productService.getAllProducts()    
  }

}
