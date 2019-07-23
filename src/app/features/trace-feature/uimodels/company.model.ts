import { Address } from "./address.model";
import { RegistrationCategory } from "./registrationcategory.model";
import { Gallery } from "./gallery.model";
import { Evidence } from "./evidence.model";
import { Certificate } from "./certificate.model";

export interface Company{
    name?:string;
    profileImageURL?:string;
    addresses?:Address[];
    registrationCategory?:RegistrationCategory;
    gallery:Gallery;
    evidences: Evidence[];

    certificates?: Certificate[];
}