import { CartItem } from './cart-item.model';
import { ShoppingCartService } from './shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private service: ShoppingCartService) { }

  ngOnInit() {
  }



  items(): CartItem[] {
    return this.service.items;
  }

  clear(){
    this.service.clear();
  }

  total(): number {
    return this.service.total();
  }

  removeItem(item: any){
    this.service.removerItem(item);
  }

  addItem(item: any){
    this.service.addItem(item);
  }

}
