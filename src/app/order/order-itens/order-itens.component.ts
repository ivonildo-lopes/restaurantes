import { CartItem } from './../../restaurant-detail/shopping-cart/cart-item.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'mt-order-itens',
  templateUrl: './order-itens.component.html',
  styleUrls: ['./order-itens.component.css']
})
export class OrderItensComponent implements OnInit {


  @Input() itensCarrinho: CartItem[];

  @Output() increaseQty = new EventEmitter<CartItem>()
  @Output() decreaseQty = new EventEmitter<CartItem>()
  @Output() remove = new EventEmitter<CartItem>()

  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQty(item: CartItem){
    this.increaseQty.emit(item);
  }

  emitDecreaseQty(item: CartItem){
    this.decreaseQty.emit(item);
  }

  emitRemove(item: CartItem){
    this.remove.emit(item);
  }


}
