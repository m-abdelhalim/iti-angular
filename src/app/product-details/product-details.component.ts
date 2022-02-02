import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../_models/product.model';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product={}as Product;
  relatedProducts =[] as Product[];
  count = 1;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  addProductToCart() {
    this.productService.addProductToCart(this.count, this.product);
  }
  increament() {
    this.count++;
  }
  decreament() {
    this.count = this.count === 1 ? 1 : --this.count;
  }

  ngOnInit(): void {
    // console.log(this.activatedRoute.snapshot.params)
    const productId = this.activatedRoute.snapshot.params['productId'];
    // console.log(productName);

    this.getProductById(productId);
    // console.log(this.product);
    
    
  }
  getProductById(id: number) {
    this.productService.getProductById(id).subscribe(
      (res) => {
        this.product = res;
        // console.log(this.product.category);
        this.getProductByCategory(this.product.category);
      },
      (err) => {
        console.log(err);
      },
      () => {}
    );
  }

  getProductByCategory(cat:string){
    // debugger;
    this.productService.getProductByCategory(cat,5).subscribe(
      (res) => {
        this.relatedProducts = res;
        // console.log(res);
        
      },
      (err) => {
        console.log(err);
      },
      () => {}
    );
  }

}
