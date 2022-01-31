import { Component, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../_models/product.model';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
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

  productArr!: Product[];
  // oldArr=[]as Product[];
  @Output()
  productAdded: EventEmitter<Product> = new EventEmitter<Product>();
  onProductAdded(product: Product) {
    // console.log(product);
    this.productAdded.emit(product);
  }
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}
  
    
  ngOnInit(): void {
    // console.log(this.activatedRoute.snapshot.params)
    this.activatedRoute.params.subscribe(params=>{
      // console.log(routeParams);
      if (params['categoryName'])
      {
        // console.log(params['categoryName']);
        
        this.getProductByCategory(params['categoryName']);}
    else this.getAllProducts();
     
    })
    // const params = this.activatedRoute.snapshot.params;
    
  }
  sortBy(ev:any){
    // console.log(ev.target.value);
    let soretedArr=[] as Product[];
    
    switch(ev.target.value){
      case "1":
        
        
      this.getAllProducts();
      break;
      
      case "2":
        // console.log("1");
         soretedArr=this.productArr.sort((p1,p2)=>{
          return p1.price - p2.price
        })
        // console.log(soretedArr);
        this.productArr=soretedArr;
        break;
        case "3":
          // console.log("2");
           soretedArr=this.productArr.sort((p1,p2)=>{
            return p2.price - p1.price
          })
          // console.log(soretedArr);
          this.productArr=soretedArr;
          break;
          case "4":
          // console.log("2");
           soretedArr=this.productArr.sort((p1,p2)=>{
            if (p1.title > p2.title) {
              return 1;
          }
      
          if (p1.title < p2.title) {
              return -1;
          }
      
          return 0;
          })
          // console.log(soretedArr);
          this.productArr=soretedArr;
          break;
        
    }
    
    
  }

  getProductByCategory(cat: string) {
    // debugger;
    this.productService.getProductByCategory(cat, 0).subscribe(
      (res) => {
        this.productArr = res;
        
        // console.log(res);
      },
      (err) => {
        console.log(err);
      },
      () => {}
    );
  }
  getAllProducts() {
    this.productService.getAllProducts().subscribe(
      (res) => {
        this.productArr = res;
        

      },
      (err) => {
        console.log(err);
      },
      () => {}
    );
  }
}
