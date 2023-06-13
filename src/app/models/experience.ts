import { EnumDeclaration, EnumType } from "typescript";
import { Experience} from "./experience";
import { Byte } from "@angular/compiler/src/util";

export class Experience {

    idExperience!:number;
    urlTravelGuide!:string;
    urlVideoExp!:string;
    description!:string;
    statusExp!:EnumType;
    updateExp!:Date;
    imageExp!:Byte;
}