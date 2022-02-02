import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../_models/product.model';
import { ProductService } from '../_services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  allCategories = [];
  product = {} as Product;
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.productService.getAllCategories().subscribe((res) => {
      this.allCategories = res;
    });
  }
  addNewProduct(form: NgForm) {
    // console.log(form.value);
    
    // debugger;
    this.productService.addNewProduct(this.product).subscribe((res) => {
      console.log(res);
    });
    // this.router.navigate(['/products'])
  }
}
