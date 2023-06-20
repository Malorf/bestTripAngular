import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AirTransport } from '../models/transport';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AirTransportService {

  private BASE_URL = "http://localhost:8080/airTransports";

  constructor(private httpClient:HttpClient) { }
  public findAll():Observable<any>{
    return this.httpClient.get(this.BASE_URL); 
}
public save(airtransport:AirTransport):Observable<any>{
    return this.httpClient.post(this.BASE_URL,airtransport);
  }
  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.BASE_URL+"/"+id);
  }
  public findOne(id:number):Observable<any>{
    return this.httpClient.get(this.BASE_URL+'/'+id);
  }
  public update(airtransport:any):Observable<any>{
    var airtransportJSON = JSON.parse(airtransport);
    return this.httpClient.put(this.BASE_URL+'/'+airtransportJSON.idAirTransport,airtransportJSON);
  }
  public findByAirTransportName(nameCompany:string):Observable<any>{
    return this.httpClient.get(this.BASE_URL+'/'+nameCompany);
  }
}
