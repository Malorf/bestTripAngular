import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { Account } from 'src/app/models/account';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as bcrypt from 'bcryptjs';


@Component({
  selector: 'app-editProfile',
  templateUrl: './editProfile.component.html',
  styleUrls: ['./editProfile.component.css'],
})
export class EditProfileComponent {
    constructor(private accountService:AccountService,private appService:AppService, private router:Router, private formBuilder: FormBuilder){
    }
    editForm!:FormGroup; 
    account:Account=new Account();
    oldPassword:string='';
    currentPassword:string='current Password';
    confirmNewPassword:string='confirm new Password';

    ngOnInit(): void 
    {
        
        this.findOne(this.appService.idAccount);
        localStorage.removeItem("editAccountId");
        localStorage.setItem("editAccountId", this.appService.idAccount.toString());
        let currentAccount = localStorage.getItem("editAccountId");
        let account = this.appService.getAccountData();
        console.log(account);

        this.editForm = this.formBuilder.group({
            idAccount:[account.idAccount],
            username:[account.username],
            currentPassword:['',Validators.required],
            newPassword:['', Validators.required],
            confirmNewPassword:['',Validators.required],
            eMail:['', Validators.required],
            profileName:['', Validators.required], 
            sub:['', Validators.required],  
            roles:[account.roles],
        })
        this.accountService.findOne(+currentAccount).subscribe(data =>{this.editForm.setValue(data);})
        this.oldPassword=account.password;
    }
    findOne(id:number)
    {
        this.accountService.findOne(id).subscribe(data=>{
        this.account=data;
      });
    }


    editAccount()
    {
      this.account.password=this.editForm.controls['newPassword'].value;
      console.log(this.account.password);
      const salt= bcrypt.genSaltSync(10);
      this.account.password =bcrypt.hashSync(this.account.password, salt);
      console.log(this.account.password);
      var accountJson =JSON.stringify(this.editForm.value);
      console.log(accountJson);
      this.accountService.update(accountJson).subscribe(()=>{this.router.navigate(['/login']);})
      alert("account updated");
    }

    authenticated()
    {
        if(this.appService.isAccount== true){
          return false; // not hidden
        }else{
          return true; // hidden
        }
    }
    changePassword()
    {
      this.confirmNewPassword=this.editForm.controls['confirmNewPassword'].value;
      this.currentPassword=this.editForm.controls['currentPassword'].value;
      const salt= bcrypt.genSaltSync(10);
      this.currentPassword =bcrypt.hashSync(this.currentPassword, salt);
      
      /*if (this.currentPassword!==this.oldPassword)
      {
        alert("wrong password");
        this.router.navigate(['/editProfile']);
      }*/
      if ( this.account.password!==this.confirmNewPassword)
      {
        alert("mismatch password");
        this.router.navigate(['/editProfile']);
      }
      else this.editAccount();
    }

}