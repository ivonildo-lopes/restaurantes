import { RestaurantService } from 'app/restaurants/restaurant/restaurant.service';
import { Review } from './review.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {


  reviews: Review[];
  
  constructor(private service: RestaurantService,
              private route: ActivatedRoute) { }

  ngOnInit() {

   this.service.reviewsOfRestaurant(this.route.parent.snapshot.params['id']).subscribe(res => {
     this.reviews = res
   })
  }

}
