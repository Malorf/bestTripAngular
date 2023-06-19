import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Newsletter } from '../models/newsletter';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  private BASE_URL = "http://localhost:8080/newsletters";

  constructor(private httpClient:HttpClient) { }
 
  public findAll():Observable<any>{
    return this.httpClient.get(this.BASE_URL); 
  }
 
   public save(newsletter:Newsletter):Observable<any>{
    return this.httpClient.post(this.BASE_URL,newsletter);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.BASE_URL+"/"+id);
  }


  public findOne(id:number):Observable<any>{
    return this.httpClient.get(this.BASE_URL+'/'+id);
  }
 
  public update(newsletter:any):Observable<any>{
 
    var newsletterJSON = JSON.parse(newsletter);
    return this.httpClient.put(this.BASE_URL+'/'+newsletterJSON.idNewsletter,newsletterJSON);
  }

}
