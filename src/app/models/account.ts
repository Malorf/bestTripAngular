import { Role } from "./role";
import { Review } from "./review"
import { TravelGuide } from "./travelguide"
import { Experience } from "./experience"
import { Newsletter } from "./newsletter"

export class Account {
    idAccount!:number;
    username!:string;
    password!:string;
    eMail!:string;
    roles!:Role[];
    profileName!:string;
    imageAccount!:Uint8Array;
    numberOfGuideContributions!:number;
    numberOfExepriencesShared!:number;
    sub!:boolean;
    reviews!:Review[];
    travelGuides!:TravelGuide[];
    experiences!:Experience[];
    newsletters!:Newsletter[];

}
