import { Review } from "./review";

export class Transport {
idTransport!:number;
transportCost!:number;
nameCompany!: string;
transportRating!:number;
timeTravel!:number;
review!: Review[];
description!:string;
}

export class AirTransport extends Transport  {
    airplaneClass!: string;
}

export class MaritimeTransport extends Transport{
    boatClass!: number;
}
