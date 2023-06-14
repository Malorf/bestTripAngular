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
  this.appService.authenticate(this.credentials,()=>{this.router.navigate(["/home"])});
 }
 redirectToSignIn()
 {
   this.router.navigate(['/account']);
 }
}
