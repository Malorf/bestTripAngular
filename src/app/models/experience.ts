export class Experience {

    idExperience!:number;
    urlTravelGuide!:string;
    urlVideoExp!:string;
    description!:string;
    updateExp!:Date;
    imageExp!:File;
    statusExp!:{
        Waiting, Approved, Refused
 };
}
