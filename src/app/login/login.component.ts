import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user={
    username: "mor_2314",
    password: "83r5^_"
};
  constructor(private productService: ProductService) {}

  ngOnInit(): void {}
  
  login(form: NgForm) {
    // console.log(this.user);
    this.productService.login(this.user).subscribe((res) => {
      console.log(res);
      
    },(err)=>{console.log(err);
    });
  }
}
