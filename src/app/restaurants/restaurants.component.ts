import { RestaurantService } from './restaurant/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'app/restaurants/restaurant/restaurant';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[];
  
  constructor(private service: RestaurantService) { }

  ngOnInit() {

    this.service.restaurants().subscribe(res => {
      this.restaurants = res;
    })
  }

}
