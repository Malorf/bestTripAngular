import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 credentials = {username : '',password : ''};
 constructor(private appService:AppService,private httpClient:HttpClient,private router:Router){

 }

 login(){
  this.appService.authenticate(this.credentials,()=>{
    if (this.appService.authenticated)
    {
    this.router.navigate(["/home"]);
    }
    else {
      alert("wrong username or wrong password");
    }
    });
  }
 redirectToSignIn()
 {
   this.router.navigate(['/account']);
 }
}
