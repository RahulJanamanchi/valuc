import { Evidence } from "./evidence.model";
import { Gallery } from "./gallery.model";
import { Certificate } from "./certificate.model";

export interface BusinessUnitData{
    name?:string;
    code?:string;
    type?:string;
    _id?:string;
    evidences?:Evidence[];
    gallery:Gallery;
    certificates?: Certificate[];
}