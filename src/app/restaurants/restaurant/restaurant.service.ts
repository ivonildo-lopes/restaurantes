import { MenuItem } from './../../restaurant-detail/menu-item/menu-item.model';
import { Review } from './../../restaurant-detail/reviews/review.model';
import { ErrorHandler } from './../../app.error.handler';
import { MEAT_API } from './../../app.api';
import { Http } from '@angular/http';
import { Restaurant } from './restaurant';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class  RestaurantService {


  constructor(private http: Http) { }

  
  restaurants(): Observable<Restaurant[]>{
     return this.http.get(`${MEAT_API}/restaurants`).map(res => res.json())
     .catch(ErrorHandler.handleError);    
  }

  restaurant(id): Observable<Restaurant>{
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
    .map(res => res.json())
    .catch(ErrorHandler.handleError)    
  }

  
   reviewsOfRestaurant(idRestaurante): Observable<Review[]>{
    return this.http.get(`${MEAT_API}/restaurants/${idRestaurante}/reviews`)
    .map(res => res.json())
    .catch(ErrorHandler.handleError)    
  }

  menuOfRestaurant(idRestaurante): Observable<MenuItem[]>{
    return this.http.get(`${MEAT_API}/restaurants/${idRestaurante}/menu`)
    .map(res => res.json())
    .catch(ErrorHandler.handleError)    
  }

}
