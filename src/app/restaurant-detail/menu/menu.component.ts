import { MenuItem } from './../menu-item/menu-item.model';
import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'app/restaurants/restaurant/restaurant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItens: MenuItem[];

  constructor(private service: RestaurantService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.service.menuOfRestaurant(this.route.parent.snapshot.params['id'])
    .subscribe(res => {
      this.menuItens = res;
    });
  }

  addItem(itemMenu: MenuItem){
    console.log(itemMenu);
  }

}
