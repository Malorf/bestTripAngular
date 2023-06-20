
import { Adress } from "./adress";
import { TravelGuide } from "./travelguide";

export class Place {
   idPlace !:number;
   placeName!: string;
   
   placeRating!:number;
   placeCost!:number;
   travelGuides!:TravelGuide[];
   adress!:Adress[];
   description!:string;
   
}

export class Restaurant extends Place {
   takeAway!:boolean;
}

export class Hotel extends Place {
   stars!:number;
}

export class Activity extends Place {
   free!:boolean;
}

