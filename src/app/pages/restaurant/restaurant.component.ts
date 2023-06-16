import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/place';
import { RestaurantService } from 'src/app/services/restaurant.service';



@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent  implements OnInit {

  restaurants!:any[];
  restaurant:Restaurant=new Restaurant();
  nameRestaurant!: string;
  
constructor(private restaurantService:RestaurantService){}

  ngOnInit():void {
    //this.findAllRestaurant();
    this.nameRestaurant ='';
    this.findByRestaurantName();

  }

  /*findAllRestaurant(){
    this.restaurantService.findAll().subscribe(data =>{this.restaurants = data});
  }*/


  findByRestaurantName(){
    this.restaurantService.findByRestaurantName(this.nameRestaurant).subscribe(data =>{
      this.restaurants = data;
    })
  }
  onSubmit(){
    this.findByRestaurantName();
  }

  saveRestaurant(){
    this.restaurantService.save(this.restaurant).subscribe(
      () => {
        // MAJ la liste des restaurants
        //this.findAllRestaurant();
        this.findByRestaurantName;
        // Vider le formulaire
        this.restaurant = new Restaurant();
      }
    )
  }
  
  deleteRestaurant(id:number){
    this.restaurantService.delete(id).subscribe(
      () => {
        //this.findAllRestaurant();
      }
    )
  }

}
