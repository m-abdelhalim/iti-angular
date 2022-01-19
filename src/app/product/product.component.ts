import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../_models/product.model';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit,AfterViewInit {

  @Input()
  product!: Product;

  @Output()
  productAdded:EventEmitter<Product> = new EventEmitter<Product>();
  
  
  
  onAddToCartPressed(){
    // this.productAdded.emit(this.product)
    this.productService.productAdded.emit(this.product)
  }
  
  constructor(private productService: ProductService) { }


  ngAfterViewInit(): void {
    
  }

  ngOnInit(): void {
  }

}
