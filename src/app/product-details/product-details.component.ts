import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../_models/product.model';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product!:Product
  count=1
  constructor(private activatedRoute:ActivatedRoute, private productService:ProductService) { }

  addProductToCart(){
    this.productService.addProductToCart(this.count, this.product)
  }
  increament(){
    this.count++
  }
  decreament(){
    this.count = this.count === 1 ? 1 : --this.count
  }

  ngOnInit(): void {
    // console.log(this.activatedRoute.snapshot.params)
    const productName = this.activatedRoute.snapshot.params['productName']
    console.log(productName);
    
    this.product=this.productService.getProductByName( productName)
  }

}
