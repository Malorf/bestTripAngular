import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private BASE_URL = "http://localhost:9090/review";

  constructor(private httpClient:HttpClient) { }
 
  public findAll():Observable<any>{
    return this.httpClient.get(this.BASE_URL); 
  }
 
   public save(review:Review):Observable<any>{
    return this.httpClient.post(this.BASE_URL,review);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.BASE_URL+"/"+id);
  }


  public findOne(id:number):Observable<any>{
    return this.httpClient.get(this.BASE_URL+'/'+id);
  }
 
  public update(review:any):Observable<any>{
 
    var reviewJSON = JSON.parse(review);
    return this.httpClient.put(this.BASE_URL+'/'+reviewJSON.idReview,reviewJSON);
  }

}
