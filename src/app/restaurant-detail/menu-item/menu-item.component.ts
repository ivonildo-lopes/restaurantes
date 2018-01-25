import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'app/restaurants/restaurant/restaurant.service';
import { MenuItem } from './menu-item.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

    
  @Input() menuItem: MenuItem;
  @Output() add = new EventEmitter(); 

  constructor(private service: RestaurantService,
              private route: ActivatedRoute) { }

  ngOnInit() {
   
  }

  emitAddEvent(){
    this.add.emit(this.menuItem);
  }



}
