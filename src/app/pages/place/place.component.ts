import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Activity, Hotel, Place, Restaurant } from 'src/app/models/place';
import { AccountService } from 'src/app/services/account.service';
import { ActivityService } from 'src/app/services/activity.service';
import { HotelService } from 'src/app/services/hotel.service';
import { PlaceService } from 'src/app/services/place.service';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { ReviewService } from 'src/app/services/reviewservice';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {

  credentials = {username : '',password : ''};

  places!:any[];
  hotels!:any[];
  activities!:any[];
  restaurants!:any[];
  reviews!:any[];
  account!:any[];
  
  place:Place=new Place();
  restaurant:Restaurant = new Restaurant();
  hotel:Hotel = new Hotel();
  activity:Activity = new Activity();

  namePlace!: string;
  nameHotel!: string;
  nameRestaurant!: string;
  nameActivity!: string;
  

constructor(private placeService:PlaceService,
            private restaurantService:RestaurantService,
            private hotelService:HotelService,
            private activityService:ActivityService,
            private reviewService:ReviewService,
            private router:Router,
            private accountService:AccountService,
            private appService:AppService){}

  ngOnInit():void {
    //this.findAllPlace();
    this.namePlace ='';
    this.nameHotel ='';
    this.nameRestaurant ='';
    this.nameActivity ='';
    this.findByPlaceName();
    this.findByHotelName();
    this.findByRestaurantName();
    this.findByActivityName();
    this.findAllReviews();
    this.findAllAccount();
  }

  /*findAllPlace(){
    this.placeService.findAll().subscribe(data =>{this.places = data});
  }*/

  findAllReviews(){
    this.reviewService.findAll().subscribe(data =>{this.reviews = data});
  }
  findAllAccount(){
    this.accountService.findAll().subscribe(data =>{this.account = data});
  }


  findByPlaceName(){
    this.placeService.findByPlaceName(this.namePlace).subscribe(data =>{
      this.places = data;
    })
  }

  findByHotelName(){
    this.hotelService.findByHotelName(this.nameHotel).subscribe(data =>{
      this.hotels = data;
    })
  }
  findByActivityName(){
    this.activityService.findByActivityName(this.nameActivity).subscribe(data =>{
      this.activities = data;
    })
  }
  findByRestaurantName(){
    this.restaurantService.findByRestaurantName(this.nameRestaurant).subscribe(data =>{
      this.restaurants = data;
    })
  }


  onSubmit(){
    this.findByPlaceName();
    this.findByActivityName();
    this.findByHotelName();
    this.findByRestaurantName();
  }

  savePlace(){
    this.placeService.save(this.place).subscribe(
      () => {
        // MAJ la liste des places
        //this.findAllPlace();
        this.findByPlaceName;
        // Vider le formulaire
        this.place = new Place();
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
    this.appService.authenticate(this.credentials,()=>{this.router.navigate(["/places"])});
   }
  
  
}

