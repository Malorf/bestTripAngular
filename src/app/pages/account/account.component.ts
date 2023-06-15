import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Account } from 'src/app/models/account';
import { AccountService } from 'src/app/services/account.service';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  // Déclaration d'un tableau d'utilisateurs
  // ! : le tableau n'est pas initialisé
  accounts!:any[]; // any : n'importe quel type de données
  account:Account=new Account();
  // Etape 6 : (recherche)
  name!:string;
  // DI : par constructeur  
  constructor(private accountService:AccountService, private appService:AppService, private router: Router){
  }
  ngOnInit(): void {
    
  }

  redirectToLogin()
  {
    this.router.navigate(['/login']);
  }
  saveAccount(){
    this.accountService.save(this.account).subscribe(
      () => {

        this.redirectToLogin();
        alert("Account Created");
        this.account = new Account();
      }
    )
  }
  // Etape 6 : (security)
  authenticated(){
    return this.appService.authenticated; // authenticated = false
  }
  // Etape 7 : (security)
  authorities(){
    if(this.appService.isAdmin == true){
      return false; // [hidden] = false isAdmin = true
    }else{
      return true; // [hidden] = true isAdmin = false
    }
  }


}
