import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private BASE_URL = "http://localhost:8080/accounts";
  // HttpClient: un module qui nous permet d'utiliser les verbes http : GET.POST,PUT et DELETE
  constructor(private httpClient:HttpClient) { }
  // findAll --> verbe http GET --> url : BASE_URL --> Récupération des données avec la méthode Observable
  // Afficher la liste des utilisateurs
  public findAll():Observable<any>{
    return this.httpClient.get(this.BASE_URL); 
  }
  // save --> verbe http POST --> url : BASE_URL + Body (account)
  public save(account:Account):Observable<any>{
    return this.httpClient.post(this.BASE_URL,account);
  }
  // delete --> verbe http DELETE --> url : BASE_URL/id
  // http://localhost:8080/accounts/5
  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.BASE_URL+"/"+id);
  }
  public update(id:number, account:Account):Observable<any>{
    return this.httpClient.put(this.BASE_URL+"/"+id, account);
  }
  // Etape 5 : (recherche)
  public findByNameAccount(username:string):Observable<any>{
    return this.httpClient.get(this.BASE_URL+'/'+username);
  }

}
