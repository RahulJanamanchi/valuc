import { Certificate } from "./certificate.model";
import { Gallery } from "./gallery.model";

export interface EvidenceClassification{
    name:string;
    description:string;
    gallery:Gallery;
    certificates:Certificate[];
}