import { CartItem } from './cart-item.model';
import { Injectable } from '@angular/core';
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item.model';

@Injectable()
export class ShoppingCartService {

  items: CartItem[] = [];


  constructor() { }

  clear(){
    this.items = []
  }



  adicionarItem(item: MenuItem) {
                  //  verifica se o item que estou adicionandi ja existe
    let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id);

    if(foundItem){
      // atualiza a quantidade
      foundItem.quantity += 1;
    }else{
      //caso nao encontre adicione o item no carrinho
      this.items.push(new CartItem(item));
    }   
  }

  removerItem(item: CartItem) {
          this.items.splice(this.items.indexOf(item),1);
  }

  total(): number {
    return this.items
    .map(item => item.value())
    .reduce((valorAnterior, valor) => valorAnterior + valor, 0);
  }

}
