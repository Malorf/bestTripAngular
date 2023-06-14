import { FormControl } from "@angular/forms";

export class TravelGuide {
    idTravelGuide!: number;
    guideName!:string;
    globalRating!:string;
    countryName!:string;
    updateTravelGuide!:Date;
    searchCtrl!:FormControl;
    searchTypeCtrl!:FormControl;
    statusTravelGuide!:{
        waiting, approved, refused

    };

}
