import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../models/place';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private BASE_URL = "http://localhost:8080/activities";

  constructor(private httpClient:HttpClient) { }
  public findAll():Observable<any>{
    return this.httpClient.get(this.BASE_URL); 
}
public save(activity:Activity):Observable<any>{
    return this.httpClient.post(this.BASE_URL,activity);
  }
  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.BASE_URL+"/"+id);
  }
  public findOne(id:number):Observable<any>{
    return this.httpClient.get(this.BASE_URL+'/'+id);
  }
  public update(activity:any):Observable<any>{
    var activityJSON = JSON.parse(activity);
    return this.httpClient.put(this.BASE_URL+'/'+activityJSON.idActivity,activityJSON);
  }
  public findByActivityName(nameActivity:string):Observable<any>{
    return this.httpClient.get(this.BASE_URL+'/'+nameActivity);
  }
}
