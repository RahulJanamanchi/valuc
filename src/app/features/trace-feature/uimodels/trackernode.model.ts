import { Inventories } from "./inventories.model";
import { CompanyData } from "./companydata.model";
import { OrderData } from "./orderdata.model";

export interface TrackerNode{
    orders?: TrackerNode[]; 
    children?:TrackerNode[];
    inventories?:Inventories[];
    companyData?:CompanyData;
    orderData?:OrderData;
    parentNode?: TrackerNode;
    isParent?:boolean;
}