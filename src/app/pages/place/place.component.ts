import { Component, OnInit } from '@angular/core';
import { Place, Restaurant } from 'src/app/models/place';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {

  places!:any[];
  place:Place=new Place();
  namePlace!: string;
  restaurant:Restaurant=new Restaurant();
;
constructor(private placeService:PlaceService){}

  ngOnInit():void {
    //this.findAllPlace();
    this.namePlace ='';
    this.findByNamePlace();

  }

  /*findAllPlace(){
    this.placeService.findAll().subscribe(data =>{this.places = data});
  }*/


  findByNamePlace(){
    this.placeService.findByNamePlace(this.namePlace).subscribe(data =>{
      this.places = data;
    })
  }
  onSubmit(){
    this.findByNamePlace();
  }

  savePlace(){
    this.placeService.save(this.place).subscribe(
      () => {
        // MAJ la liste des places
        //this.findAllPlace();
        this.findByNamePlace;
        // Vider le formulaire
        this.place = new Place();
      }
    )
  }
  
  deletePlace(id:number){
    this.placeService.delete(id).subscribe(
      () => {
        //this.findAllPlace();
      }
    )
  }
}

