import { TrackerNode } from "./trackernode.model";
import { Inventories } from "./inventories.model";
import { CompanyData } from "./companydata.model";

export interface Conversion{
    children:TrackerNode[];
    inventories:Inventories[];
    companyData:CompanyData;
}