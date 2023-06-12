
export class Review {
    idReview!:number;
    comment!:string;
    userRating!:number;
    reviewObjectId!:number;
    enum reviewObjectType {
        TravelGuide, Place, Transport


    };
    
}
