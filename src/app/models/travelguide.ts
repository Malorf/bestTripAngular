import { FormControl } from "@angular/forms";

export class TravelGuide {
    idTravelGuide!: number;
    guideName!:string;
    globalRating!:number;
    countryName!:string;
    updateTravelGuide!:Date;
    travelCost!:number;

    statusTravelGuide!:{
        waiting, approved, refused

    };

}
