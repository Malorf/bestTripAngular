import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// step 1 :
@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private BASE_URL = "http://localhost:8080/roles";
  constructor(private httpClient:HttpClient) { }
  public findAll():Observable<any>{
    return this.httpClient.get(this.BASE_URL); 
  }
}
