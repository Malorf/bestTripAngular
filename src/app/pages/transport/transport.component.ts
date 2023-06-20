import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AppService } from "src/app/app.service";
import { Review } from "src/app/models/review";
import { AirTransport, MaritimeTransport, Transport } from "src/app/models/transport";
import { AccountService } from "src/app/services/account.service";
import { AirTransportService } from "src/app/services/air-transport.service";
import { MaritimeTransportService } from "src/app/services/maritime-transport.service";
import { ReviewService } from "src/app/services/reviewservice";
import { TransportService } from "src/app/services/transport.service";

@Component({
  selector: "app-transport",
  templateUrl: "transport.component.html"
})
export class TransportsComponent implements OnInit {
  credentials = {username : '',password : ''};

  transports!:any[];
  airTransports!:any[];
  maritimeTransports!:any[];
  reviews!:any[];

  transport:Transport=new Transport();
  airTransport:AirTransport=new AirTransport();
  maritimeTransport:MaritimeTransport=new MaritimeTransport;
  review:Review=new Review;
  nameCompany: string;
  nameCompanyAT: string;
  nameCompanyMT: string;

constructor(private transportService:TransportService,
            private airTransportService:AirTransportService,
            private maritimeTransportService:MaritimeTransportService,
            private reviewService:ReviewService,
            private accountService:AccountService,
            private appService:AppService,
            private router:Router){}

  ngOnInit():void {
    this.nameCompany ='';
    this.nameCompanyAT = '';
    this.nameCompanyMT ='';

    /*this.findAllTransport();*/
    this.findByNameCompany();
    this.findByAirTransportName();
    this.findByMaritimeTransportName();
    this.findAllReview();
     
  }

  /*findAllTransport(){
    this.transportService.findAll().subscribe(data =>{this.transports = data});
  }*/
  findAllReview(){
    this.reviewService.findAll().subscribe(data =>{this.reviews = data});
  }

  findByNameCompany(){
    this.transportService.findByNameCompany(this.nameCompany).subscribe(data =>{
      this.transports = data;
    })
  }

  findByAirTransportName(){
    this.airTransportService.findByAirTransportName(this.nameCompanyAT).subscribe(data =>{
      this.airTransports = data;
    })
  }
  findByMaritimeTransportName(){
    this.maritimeTransportService.findByMaritimeTransportName(this.nameCompanyMT).subscribe(data =>{
      this.maritimeTransports = data;
    })
  }
  onSubmit(){
    this.findByNameCompany();
    this.findByAirTransportName();
    this.findByMaritimeTransportName();
  }

  saveTransport(){
    this.transportService.save(this.transport).subscribe(
      () => {
        // MAJ la liste des transports
        this.findByNameCompany();
        // Vider le formulaire
        this.transport = new Transport();
      }
    )
    
  }


  deleteTransport(id:number){
    this.transportService.delete(id).subscribe(
      () => {
        this.findByNameCompany();
      }
    )
  }
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

  
   login(){
    this.appService.authenticate(this.credentials,()=>{
      if (this.appService.authenticated)
      {
      this.router.navigate(["/transports"]);
      }
      else {
        alert("wrong username or wrong password");
      }
      });
    }
}
