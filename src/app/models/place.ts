import { Adress } from "./adress";

export class Place {
   idPlace !:number;
   placeName!: string;
   adress!:Adress;
   placeRating!:number;
   placeCost!:number;
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
