import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from '../models/place';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private BASE_URL = "http://localhost:8080/hotels";

  constructor(private httpClient:HttpClient) { }
  public findAll():Observable<any>{
    return this.httpClient.get(this.BASE_URL); 
}
public save(hotel:Hotel):Observable<any>{
    return this.httpClient.post(this.BASE_URL,hotel);
  }
  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.BASE_URL+"/"+id);
  }
  public findOne(id:number):Observable<any>{
    return this.httpClient.get(this.BASE_URL+'/'+id);
  }
  public update(hotel:any):Observable<any>{
    var hotelJSON = JSON.parse(hotel);
    return this.httpClient.put(this.BASE_URL+'/'+hotelJSON.idHotel,hotelJSON);
  }
  public findByHotelName(nameHotel:string):Observable<any>{
    return this.httpClient.get(this.BASE_URL+'/'+nameHotel);
  }
}
