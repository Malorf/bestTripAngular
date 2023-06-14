
export class Review {
    idReview!:number;
    comment!:string;
    userRating!:number;
    reviewObjectId!:number;
    reviewObjectType!:{
       TravelGuide, Place, Transport
 };
    
}
