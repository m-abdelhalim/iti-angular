export interface Product{
    name:string,
    price:number,
    discount?:number,
    imageUrl:string,
    description:string
  }

  export interface CartList{
    count:number,
    product:Product
  }