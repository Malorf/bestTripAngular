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
  
  constructor( private travelGuideService:TravelGuideService, private router:Router){
  }
  ngOnInit(): void {
  
  this.countryName = '',
  this.totalCost [0] , 
  this.globalRating  [0],
  this.findByCountryNameAndTotalCostAndGlobalRating();
  
  }
  findByCountryNameAndTotalCostAndGlobalRating(){
  this.travelGuideService.findByCountryNameAndTotalCostAndGlobalRating(this.countryName,this.totalCost,this.globalRating).subscribe(data =>{
  this.users = data;
  })
  }
  saveTravelGuide(){
  this.travelGuideService.save(this.tg).subscribe(
  () => {
  this.findByCountryNameAndTotalCostAndGlobalRating();
  this.tg = new TravelGuide();
  }
  )
  }
  
  editTravelGuide(travelGuide:TravelGuide){
  localStorage.removeItem("editUserId");
  localStorage.setItem("editUserId",travelGuide.idTravelGuide.toString());
  this.router.navigate(['/editUser',travelGuide.idTravelGuide]);
  }
  
  deleteTravelGuide(id:number){
  this.travelGuideService.delete(id).subscribe(
  () => {
  
  }
  )
  }
  
  
  
  onSubmit(){
  this.findByCountryNameAndTotalCostAndGlobalRating();
  
  }
}
