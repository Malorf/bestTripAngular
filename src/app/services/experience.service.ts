import { Injectable } from '@angular/core';
import { Experience } from '../models/experience';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private BASE_URL = "http://localhost:8080/experiences";

  constructor(private httpClient:HttpClient) { }
 
  public findAll():Observable<any>{
    return this.httpClient.get(this.BASE_URL); 
  }
 
   // save --> verbe http POST --> url : BASE_URL + Body (utilisateur)
  public save(experience:Experience):Observable<any>{
    return this.httpClient.post(this.BASE_URL,experience);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.BASE_URL+"/"+id);
  }


  public findOne(id:number):Observable<any>{
    return this.httpClient.get(this.BASE_URL+'/'+id);
  }
 
  public findByUpdateExp(date:Date):Observable<any>{
    return this.httpClient.get(this.BASE_URL+'/'+date);
  }

  public update(experience:any):Observable<any>{
 
    var experienceJSON = JSON.parse(experience);
    return this.httpClient.put(this.BASE_URL+'/'+experienceJSON.idExperience,experienceJSON);
  }

}


