import { CompanyData } from "./companydata.model";
import { Inventories } from "./inventories.model";
import { OrderData } from "./orderdata.model";

export interface StockMasterOrder{
    companyData:CompanyData;
    productData:Inventories;
    orderData:OrderData;
}