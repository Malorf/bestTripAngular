import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { RoleService } from 'src/app/services/role.service';
import { Account } from 'src/app/models/account';


@Component({
  selector: 'app-editProfile',
  templateUrl: './editProfile.component.html',
  styleUrls: ['./editProfile.component.css'],
})
export class EditProfileComponent {
    constructor(private accountService:AccountService,private appService:AppService, private router:Router, private http:HttpClient){
    }
    account:any; // any : n'importe quel type de données
    eAccount:Account=new Account();

    ngOnInit(): void 
    {
        console.log(this.account);
        this.findOne(this.account);
    }
      
    findOne(id:number)
    {
        this.accountService.findOne(id).subscribe(data => {this.account=data});
    }

    editAccount(account:Account)
    {
        localStorage.removeItem("editAccountId");
        localStorage.setItem("editAccountId", account.idAccount.toString());
        this.router.navigate(['/editAccount', account.idAccount]);
    }

    authenticated()
    {
        if(this.appService.isAccount== true){
          return false; // not hidden
        }else{
          return true; // hidden
        }
    }


}