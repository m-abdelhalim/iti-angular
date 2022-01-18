import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  itemAdded : EventEmitter<any> = new EventEmitter<any>()

  constructor() { }
}
