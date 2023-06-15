export class Transport {
idTransport!:number;
transportCoast!:number;
nameCompany!: string;
transporRating!:number;
timeTravel!:number;
}

export class AirTransport extends Transport  {
    airPlaceClass!: number;
}

export class MaritimeTransport extends Transport{
    boatClass!: number;
}
