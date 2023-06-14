import { Injectable } from '@angular/core';
import { Experience } from '../models/experience';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private BASE_URL = "http://localhost:9090/experience";

  constructor(private httpClient:HttpClient) { }
 
  public findAll():Observable<any>{
    return this.httpClient.get(this.BASE_URL); 
  }
 
  public save(image:File,experience:Experience):Observable<any>{
    // Utilisation du RequestParam de la Partie Back
    const formData=new FormData();
    formData.append('Description',experience.description);
   /* formData.append('urlVideoExp',experience.urlVideoExp);*/
    formData.append('imageFront',image);
    const requestHttp=new HttpRequest('POST',this.BASE_URL,formData,{
     reportProgress:true, responseType:'text'
    });
    return this.httpClient.request(requestHttp);
 }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.BASE_URL+"/"+id);
  }


  public findOne(id:number):Observable<any>{
    return this.httpClient.get(this.BASE_URL+'/'+id);
  }
 
  public update(experience:any):Observable<any>{
 
    var experienceJSON = JSON.parse(experience);
    return this.httpClient.put(this.BASE_URL+'/'+experienceJSON.idExperience,experienceJSON);
  }

}


