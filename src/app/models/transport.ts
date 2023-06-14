export class Transport {
idTransport!:number;
transportCoast!:number;
nameCompany!: string;
transporRating!:number;
timeTravel!:number;
}

class AirTransport extends Transport  {
    airPlaceClass!: number;
}

class MaritimeTransport extends Transport{
    boatClass!: number;
}
