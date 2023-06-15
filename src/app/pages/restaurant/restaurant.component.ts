import { Component, OnInit } from '@angular/core';
import { PlaceComponent } from '../place/place.component';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent extends PlaceComponent implements OnInit {

  

}
