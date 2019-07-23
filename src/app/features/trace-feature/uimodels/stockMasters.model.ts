import { StockData } from "./stockdata.model";
import { TrackerNode } from "./trackernode.model";
import { StockMasterOrder } from "./stockermasterorder.model";
import { Item } from "./item.model";
import { StockMaster } from "./stockmaster.model";

export interface StockMasters{
    count:number;
    conversions:TrackerNode[];
    orders:StockMasterOrder[];
    stockData:StockData;
    stockMaster:StockMaster;
    items:Item[];
}