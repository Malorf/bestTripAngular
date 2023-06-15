import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { RoleService } from 'src/app/services/role.service';
import { Account } from 'src/app/models/account';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {

    accounts!:any[]; // any : n'importe quel type de données
    roles!:any[]; // step 3
    account:Account=new Account();
    // Etape 6 : (recherche)
    name!:string;

    constructor(private accountService:AccountService,/*step4*/private roleService:RoleService,private appService:AppService){
    }

    ngOnInit(): void {
        this.findAllAccounts();
        // step 6
        this.findAllRoles();
        // Etape 8 : (recherche)
        this.name = '';
        //this.findByNameAccount();
      }
      findAllAccounts(){
        // data : les données qui se trouvent dans le cache du navigateur
        this.accountService.findAll().subscribe(data => {this.accounts = data});
      }
      // Etape 7 : (recherche)
      /*findByNameAccount(){
        this.accountService.findByNameAccount(this.name).subscribe(data =>{
          this.accounts = data;
        })
      }
      // Etape 9 : (recherche)
      onSubmit(){
        this.findByNameAccount();
      }*/
      // step 5
      findAllRoles(){
        this.roleService.findAll().subscribe(data => {this.roles = data});
      }


    deleteAccount(id:number){
        this.accountService.delete(id).subscribe(
          () => {
            this.findAllAccounts();
            alert("Account Deleted");
          }
        )
      }
      updateAccount(id:number, account:Account){
        this.accountService.update(id, account).subscribe(
          () => {
            this.findAllAccounts();
            alert("Account Updated");
          }
        )
      }
      authorities(){
        if(this.appService.isAdmin == true){
          return false; // [hidden] = false isAdmin = true
        }else{
          return true; // [hidden] = true isAdmin = false
        }
      }
}