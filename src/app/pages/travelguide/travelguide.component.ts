import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { Observable } from "rxjs/internal/Observable";

import { TravelGuide } from "src/app/models/travelguide";
import { TravelGuideService } from "src/app/services/travelguide.service";

@Component({
  selector: "app-travelguide",
  templateUrl: "travelguide.component.html"
 

})
export class TravelGuideComponent implements OnInit{
  users!:any[]; 
  countries:any[];
  tg: TravelGuide=new TravelGuide();
  
  countryName!:string;
  totalCost!:number;
  globalRating!:number;
 
  constructor( private http: HttpClient, private travelGuideService:TravelGuideService){
    }
 
  
  
  
  ngOnInit(): void {

    this.countryName = '';
    this.findByCountryName();

    this.totalCost=0;
    this.findByTotalCost();

    this.globalRating=0;
    this.findByGlobalRating();


  }
  findByCountryName(){
    this.travelGuideService.findByCountryName(this.countryName).subscribe(data =>{
      this.users = data;
    })
  }
  findByTotalCost(){
    this.travelGuideService.findByTotalCost(this.totalCost).subscribe(data =>{
      this.users = data;
    })
  
}
findByGlobalRating(){
  this.travelGuideService.findByGlobalRating(this.totalCost).subscribe(data =>{
    this.users = data;
  })
}
saveTravelGuide(){
  this.travelGuideService.save(this.tg).subscribe(
    () => {
      
      this.findByCountryName();
      this.findByTotalCost();
      this.findByGlobalRating();
      this.tg = new TravelGuide();
    }
  )
}
deleteTravelGuide(id:number){
  this.travelGuideService.delete(id).subscribe(
    () => {

    }
  )
}



onSubmit(){
  this.findByCountryName();
  this.findByTotalCost();
  this.findByGlobalRating();
}
}
