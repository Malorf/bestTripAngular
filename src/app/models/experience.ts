import { Account } from "./account";

export class Experience {

    idExperience!:number;
    urlTravelGuide!:string;
    urlVideoExp!:string;
    description!:string;
    accountExperience!:Account;
    updateExp!:Date;
    statusExp!:{
        Waiting, Approved, Refused
 };
}
