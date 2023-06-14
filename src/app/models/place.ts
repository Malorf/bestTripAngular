import { Adress } from "./adress";

export class Place {
   idPlace !:number;
   placeName!: string;
   adress!:Adress;
   placeRating!:number;
   placeCost!:number;
}

class Restaurant extends Place {
   takeAway!:boolean;
}

class Hotel extends Place {
   stars!:number;
}

class Activity extends Place {
   free!:boolean;
}
