import { Injectable } from '@angular/core';
import { MaritimeTransport } from '../models/transport';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MaritimeTransportService {

  private BASE_URL = "http://localhost:8080/maritimeTransports";

  constructor(private httpClient:HttpClient) { }
  public findAll():Observable<any>{
    return this.httpClient.get(this.BASE_URL); 
}
public save(maritimetransport:MaritimeTransport):Observable<any>{
    return this.httpClient.post(this.BASE_URL,maritimetransport);
  }
  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.BASE_URL+"/"+id);
  }
  public findOne(id:number):Observable<any>{
    return this.httpClient.get(this.BASE_URL+'/'+id);
  }
  public update(maritimetransport:any):Observable<any>{
    var maritimetransportJSON = JSON.parse(maritimetransport);
    return this.httpClient.put(this.BASE_URL+'/'+maritimetransportJSON.idMaritimeTransport,maritimetransportJSON);
  }
  public findByMaritimeTransportName(nameCompany:string):Observable<any>{
    return this.httpClient.get(this.BASE_URL+'/'+nameCompany);
  }
}
