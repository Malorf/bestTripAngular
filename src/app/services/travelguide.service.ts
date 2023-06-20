import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TravelGuide } from '../models/travelguide';

@Injectable({
  providedIn: 'root'
})
export class TravelGuideService {

  private BASE_URL = "http://localhost:8080/travelGuides";

  constructor(private httpClient:HttpClient) { }
  public findAll():Observable<any>{
  return this.httpClient.get(this.BASE_URL); 
  }
  public save(travelguide:TravelGuide):Observable<any>{
  return this.httpClient.post(this.BASE_URL,travelguide);
  }
  
  public delete(id:number):Observable<any>{     
  return this.httpClient.delete(this.BASE_URL+"/"+id);
  }
  public findOne(id:number):Observable<any>{
  return this.httpClient.get(this.BASE_URL+'/'+id);
  }
  public update(travelguide:any):Observable<any>{
  var travelguideJSON = JSON.parse(travelguide);
  return this.httpClient.put(this.BASE_URL+'/'+travelguideJSON.idTravelGuide,travelguideJSON);
  }
  public findByCountryNameAndTotalCostAndGlobalRating (countryName:string, totalCost:number, globalRating:number ):Observable<any>{
  return this.httpClient.get(this.BASE_URL+'/'+countryName+'/'+totalCost+'/'+globalRating
                              );
  
  
  }

}



