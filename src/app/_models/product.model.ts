export interface Product{
  id:number,  
  title:string,
    price:number,
    discount?:number,
    image:string,
    description:string,
    category:string
  }

  export interface CartList{
    count:number,
    product:Product
  }