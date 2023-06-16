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

  constructor(private httpClient:HttpClient, private router:Router) { }

  logout()
  {
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
        }
      }else{
        this.authenticated = false;
      }
      return callback && callback();
    })
  }
}
