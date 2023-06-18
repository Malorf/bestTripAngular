import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/place';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

  hotels!:any[];
  hotel:Hotel=new Hotel();
  nameHotel!: string;
  
constructor(private hotelService:HotelService){}

  ngOnInit():void {
    //this.findAllHotel();
    this.nameHotel ='';
    this.findByHotelName();

  }

  /*findAllHotel(){
    this.hotelService.findAll().subscribe(data =>{this.hotels = data});
  }*/


  findByHotelName(){
    this.hotelService.findByHotelName(this.nameHotel).subscribe(data =>{
      this.hotels = data;
    })
  }
  onSubmit(){
    this.findByHotelName();
  }

  saveHotel(){
    this.hotelService.save(this.hotel).subscribe(
      () => {
        // MAJ la liste des hotels
        //this.findAllHotel();
        this.findByHotelName;
        // Vider le formulaire
        this.hotel = new Hotel();
      }
    )
  }
  
  deleteHotel(id:number){
    this.hotelService.delete(id).subscribe(
      () => {
        //this.findAllHotel();
      }
    )
  }


}
