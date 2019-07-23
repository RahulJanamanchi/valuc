import { EvidenceClassification } from "./evidenceclassification.model";
import { Image } from "./image.model";

export interface Evidence{
    evidenceType:string;
    images: Image[];
    evidenceClassification:EvidenceClassification[];
}