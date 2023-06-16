import { Component, OnInit } from '@angular/core';
import { Activity, Hotel, Place, Restaurant } from 'src/app/models/place';
import { ActivityService } from 'src/app/services/activity.service';
import { HotelService } from 'src/app/services/hotel.service';
import { PlaceService } from 'src/app/services/place.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {

  places!:any[];
  hotels!:any[];
  activities!:any[];
  restaurants!:any[];
  place:Place=new Place();
  restaurant:Restaurant = new Restaurant();
  hotel:Hotel = new Hotel();
  activity:Activity = new Activity();

  namePlace!: string;
  
  nameHotel: string;
  nameRestaurant: string;
  nameActivity: string;

constructor(private placeService:PlaceService,
            private restaurantService:RestaurantService,
            private hotelService:HotelService,
            private activityService:ActivityService){}

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
  }

  /*findAllPlace(){
    this.placeService.findAll().subscribe(data =>{this.places = data});
  }*/


  findByPlaceName(){
    this.placeService.findByPlaceName(this.namePlace).subscribe(data =>{
      this.places = data;
    })
  }

  findByHotelName(){
    this.placeService.findByPlaceName(this.nameHotel).subscribe(data =>{
      this.places = data;
    })
  }
  findByActivityName(){
    this.placeService.findByPlaceName(this.nameActivity).subscribe(data =>{
      this.places = data;
    })
  }
  findByRestaurantName(){
    this.placeService.findByPlaceName(this.nameRestaurant).subscribe(data =>{
      this.places = data;
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
  saveHotel(){
    this.hotelService.save(this.hotel).subscribe(
      () => {
        // MAJ la liste des places
        //this.findAllPlace();
        this.findByPlaceName;
        // Vider le formulaire
        this.place = new Place();
      }
    )
  }
}

