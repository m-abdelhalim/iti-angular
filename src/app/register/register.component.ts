import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../_services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user =  {
    email:'',
    username:'johnd',
    password:'',
    name:{
        firstname:'John',
        lastname:'Doe'
    },
    address:{
        city:'kilcoole',
        street:'7835 new road',
        number:3,
        zipcode:'12926-3874',
        geolocation:{
            lat:'-37.3159',
            long:'81.1496'
        }
    },
    phone:'1-570-236-7033'
}

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  register(form: NgForm) {
    console.log(this.user);
    this.productService.register(this.user).subscribe((res) => {
      console.log(res);
      
    },(err)=>{console.log(err);
    });
  }

}
