import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
// Etape 1 : (security)
export class AppService {
  // Authentification
  authenticated=false;
  responseAll: any;
  // Autorisation :
  isAdmin = false;
  isAccount = false;
  idAccount:any;

  constructor(private httpClient:HttpClient, private router:Router) { 

    const accountData = localStorage.getItem('accountData');
    if (accountData)
    {
      this.responseAll =JSON.parse(accountData);
      this.idAccount =this.responseAll['idAccount'];
    }
  }
  // data account
  storeAccountData(accountData:any){
    localStorage.setItem('accountData',JSON.stringify(accountData));
  }
  getAccountData()
  {
    return JSON.parse(localStorage.getItem('accountData')||'{}');
  }
  logout()
  {
    localStorage.removeItem('accountData');
    this.authenticated=false;
    this.isAdmin=false;
    this.isAccount=false;
    this.router.navigate(["/login"]);
  }

  authenticate(credentials:any,callback:any){
    const request = new HttpHeaders(
      credentials ? {
        authorization : 'Basic ' + btoa(credentials.username+ ':' +credentials.password)
      } : {}
    );
    this.httpClient.get('http://localhost:8080/login/account',{headers:request}).subscribe(response => {
      this.responseAll = response; // objet = utilisateur
      console.log("responseAll="+this.responseAll);
      if(this.responseAll['username']){
        this.authenticated = true;
        // vérification des profils :
        for(let i=0;i<this.responseAll['roles'].length;i++){
          if(this.responseAll['roles'][i]['idRole']==1){
            this.isAccount = true;
          }
          if(this.responseAll['roles'][i]['idRole']==2){
            this.isAdmin = true;
          }
          this.storeAccountData(this.responseAll);
          localStorage.setItem('currentAccount',JSON.stringify(this.responseAll)); //stock data of connected account
          localStorage.setItem('authenticated','true');
        }
      }else{
        this.authenticated = false;
      }
      return callback && callback();
    },
      (error) => {
        if (error.status ===401)
        {
          this.authenticated=false;
          return callback && callback();
          
        }
        else {
          console.error('error during authentication', error);
        }
      }
    );
  }
}
