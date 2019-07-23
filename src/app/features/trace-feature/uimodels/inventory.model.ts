import { InventoryImage } from "./inventoryimage.model";
import { Price } from "./price.model";
import { Gallery } from "./gallery.model";
import { Evidence } from "./evidence.model";
import { Certificate } from "./certificate.model";

export interface Inventory{
    unitMeasure:string;
    brandName:string;
    brandVarietyName:string;
    productCode:string;
    productName:string;
    productType:string;
    unitOfMeasureName:string;
    productBrandVariety: ProductBrandVariety;
    inventoryImages:InventoryImage[];
    price:Price;
    gallery:Gallery;
    evidences:Evidence[];
    certificates?: Certificate[];

}

export interface ProductBrandVariety{
    gradeDefinition: GradeDefinition[];
    qualityDefinition:QualityDefinition[];
}

export interface GradeDefinition{
    attributeKey:string;
    attributeValue:string;
}

export interface QualityDefinition{
    attributeKey:string;
    attributeValue:string;
}