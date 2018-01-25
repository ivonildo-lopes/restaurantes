import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'app/restaurants/restaurant/restaurant';
import { RestaurantService } from 'app/restaurants/restaurant/restaurant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;

  constructor(private service: RestaurantService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.service.restaurant(this.route.snapshot.params['id']).subscribe(res => {
      this.restaurant = res;
    });
  }


  change(evento){

  }

}
