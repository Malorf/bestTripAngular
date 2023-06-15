import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Place } from '../models/place';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  private BASE_URL = "http://localhost:8080/places";

  constructor(private httpClient:HttpClient) { }
  public findAll():Observable<any>{
    return this.httpClient.get(this.BASE_URL); 
}
public save(place:Place):Observable<any>{
    return this.httpClient.post(this.BASE_URL,place);
  }
  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.BASE_URL+"/"+id);
  }
  public findOne(id:number):Observable<any>{
    return this.httpClient.get(this.BASE_URL+'/'+id);
  }
  public update(place:any):Observable<any>{
    var placeJSON = JSON.parse(place);
    return this.httpClient.put(this.BASE_URL+'/'+placeJSON.idPlace,placeJSON);
  }
  public findByNamePlace(nom:string):Observable<any>{
    return this.httpClient.get(this.BASE_URL+'/'+nom);
  }
}
