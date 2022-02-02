import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../_models/product.model';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-product-list-container',
  templateUrl: './product-list-container.component.html',
  styleUrls: ['./product-list-container.component.scss']
})
export class ProductListContainerComponent implements OnInit {

  @Output()
  productAdded:EventEmitter<Product> = new EventEmitter<Product>();

allCategories = []
  onProductAdded(product:Product){
    this.productAdded.emit(product)
  }
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    // console.log(this.activatedRoute.snapshot.params)
    
      

    this.getAllCategories();
  }

  getAllCategories(){
    this.productService.getAllCategories().subscribe(
      (res)=>{
        this.allCategories=res;
      }
    );
  }

}
