import { Inventory } from "./inventory.model";
import { Conversion } from "./conversion.model";
import { StockMasters } from "./stockMasters.model";

export interface Inventories{
    conversions:Conversion[];
    inventory:Inventory;
    stockMasters:StockMasters[];
    orderCreatedDate?:string;
}