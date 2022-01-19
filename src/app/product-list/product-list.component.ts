import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Product } from '../models/product.model';

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
 
  
  productArr :Product[] = [
    {
      name: 'Product 1001',
      price:200,
      discount:20,
      imageUrl:"https://picsum.photos/seed/1/300",
      description:""
    },
    {
      name: 'Product 1002',
      price:100,
      imageUrl:"https://picsum.photos/seed/picsum/300",
      description:""
    },
    {
      name: 'Product 1003',
      price:150,
      imageUrl:"https://picsum.photos/seed/picsum/300",
      description:""
    },
    {
      name: 'Product 1004',
      price:100,
      discount:20,
      imageUrl:"https://picsum.photos/seed/picsum/300",
      description:""
    },
    {
      name: 'Product 1005',
      price:150,
      discount:20,
      imageUrl:"https://picsum.photos/seed/picsum/300",
      description:""
    },
    {
      name: 'Product 1006',
      price:300,
      imageUrl:"https://picsum.photos/seed/picsum/300",
      description:""
    }
  ]

  @Output()
  productAdded:EventEmitter<Product> = new EventEmitter<Product>();
  onProductAdded(product:Product){
    // console.log(product);
    this.productAdded.emit(product)
  }
  constructor() { 
    // this.getProd();
    // ({products:this.productArr} = this.products)
    // console.log(this.productArr);
  }

  ngOnInit(): void {
    
    
    
    
    
  }

}
