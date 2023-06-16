import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from '../models/place';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private BASE_URL = "http://localhost:8080/restaurants";

  constructor(private httpClient:HttpClient) { }
  public findAll():Observable<any>{
    return this.httpClient.get(this.BASE_URL); 
}
public save(restaurant:Restaurant):Observable<any>{
    return this.httpClient.post(this.BASE_URL,restaurant);
  }
  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.BASE_URL+"/"+id);
  }
  public findOne(id:number):Observable<any>{
    return this.httpClient.get(this.BASE_URL+'/'+id);
  }
  public update(restaurant:any):Observable<any>{
    var restaurantJSON = JSON.parse(restaurant);
    return this.httpClient.put(this.BASE_URL+'/'+restaurantJSON.idRestaurant,restaurantJSON);
  }
  public findByRestaurantName(nameRestaurant:string):Observable<any>{
    return this.httpClient.get(this.BASE_URL+'/'+nameRestaurant);
  }
}
