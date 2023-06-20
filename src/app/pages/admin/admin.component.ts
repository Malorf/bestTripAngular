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

    constructor(private accountService:AccountService,private roleService:RoleService,private appService:AppService, private router:Router, private http:HttpClient){
    }

    ngOnInit(): void {
        this.findAllAccounts();

        this.findAllRoles();
        console.log(this.accounts);
      }
      findAllAccounts(){
        // data : les données qui se trouvent dans le cache du navigateur
        this.accountService.findAll().subscribe(data => {
          this.accounts = data;
        });
      }

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
      authorities(){
        if(this.appService.isAdmin == true){
          return false; 
        }else{
          return true; 
        }
      }
      promoteAdmin(id:number, account:Account)
      {
        const updatedAccount ={...account};
        updatedAccount.roles=[{idRole:2, nameRole:'admin'}, {idRole:1, nameRole:'user'}];
        this.accountService.updateRole(id, updatedAccount).subscribe(
          ()=>{
            this.findAllAccounts();
            alert("Account updated");
          }
        )
      }
      demoteAdmin(id:number, account:Account)
      {
        const updatedAccount ={...account};
        updatedAccount.roles=[{idRole:1, nameRole:'user'}];
        this.accountService.updateRole(id, updatedAccount).subscribe(
          ()=>{
            this.findAllAccounts();
            alert("Account updated");
          }
        )
      }
      banUser(id:number, account:Account)
      {
        const updatedAccount ={...account};
        updatedAccount.roles=[];
        this.accountService.updateRole(id, updatedAccount).subscribe(
          ()=>{
            this.findAllAccounts();
            alert("Account updated");
          }
        )
      }

      getEmails(): string {
        let emails = '';
        if (this.accounts && this.accounts.length >0)
        {
          for (let i = 0; i < this.accounts.length; i++)
          { const account = this.accounts[i];
            if (account.sub)
            { emails += account.eMail + ', '; }
          }
        }
        emails = emails.slice(0, -2); // Supprime la virgule et l'espace en trop à la fin
        return emails;
      }
      
      
      sendEmail(): void {
        const emails = this.getEmails();
        const mailToLink ="mailto:"+ emails;
        window.location.href = mailToLink;
        console.log(mailToLink);
      }
    
    
}