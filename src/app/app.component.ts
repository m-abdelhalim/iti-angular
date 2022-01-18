import { Component } from '@angular/core';
import { Product } from './models/product.model';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proj1';
  addedProducts : Product[]=[];

  onProductAdded(product:Product){
    this.addedProducts.push(product);
    // this.addedProducts=[...new Set<Product>(this.addedProducts)]
  }
}
