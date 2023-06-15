import { Component, OnInit } from '@angular/core';
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
  roles!:any[]; // step 3
  account:Account=new Account();
  // Etape 6 : (recherche)
  name!:string;
  // DI : par constructeur  
  constructor(private accountService:AccountService,/*step4*/private roleService:RoleService,private appService:AppService){
  }
  ngOnInit(): void {
    //this.findAllUtilisateurs();
    // step 6
    this.findAllRoles();
    // Etape 8 : (recherche)
    this.name = '';
    this.findByNameAccount();
  }
  /*findAllUtilisateurs(){
    // data : les données qui se trouvent dans le cache du navigateur
    this.utilisateurService.findAll().subscribe(data => {this.users = data});
  }*/
  // Etape 7 : (recherche)
  findByNameAccount(){
    this.accountService.findByNameAccount(this.name).subscribe(data =>{
      this.accounts = data;
    })
  }
  // Etape 9 : (recherche)
  onSubmit(){
    this.findByNameAccount();
  }
  // step 5
  findAllRoles(){
    this.roleService.findAll().subscribe(data => {this.roles = data});
  }
  saveAccount(){
    this.accountService.save(this.account).subscribe(
      () => {
        // MAJ la liste des utilisateurs
        //this.findAllUtilisateurs();
        this.findByNameAccount();
        // Vider le formulaire
        this.account = new Account();
      }
    )
  }
  deleteAccount(id:number){
    this.accountService.delete(id).subscribe(
      () => {
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
