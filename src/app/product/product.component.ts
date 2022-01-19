import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../_models/product.model';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input()
  product!: Product;

    
  onAddToCartPressed(){
        this.productService.addProductToCart(1, this.product)
  }
  
  constructor(private productService: ProductService) { }


  
  ngOnInit(): void {
  }

}
