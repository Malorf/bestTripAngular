import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transport } from '../models/transport';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransportService {

  private BASE_URL = "http://localhost:8080/transports";

  constructor(private httpClient:HttpClient) { }
  public findAll():Observable<any>{
    return this.httpClient.get(this.BASE_URL); 
}
public save(transport:Transport):Observable<any>{
    return this.httpClient.post(this.BASE_URL,transport);
  }
  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.BASE_URL+"/"+id);
  }
  public findOne(id:number):Observable<any>{
    return this.httpClient.get(this.BASE_URL+'/'+id);
  }
  public update(transport:any):Observable<any>{
    var transportJSON = JSON.parse(transport);
    return this.httpClient.put(this.BASE_URL+'/'+transportJSON.idTransport,transportJSON);
  }
}
