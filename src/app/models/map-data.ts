import { ProductData } from './product-details';
export interface MapData{
    markers:Marker[];
    paths:Path[];
    selectNode:string;
    selectPath:
    {
        pathSource:string;
        pathDestination:string;
    }
}
export interface Marker{
    location:string;
    label:string;
    
}
export interface Path{
    source:string;
    destination:string;
    pathDetails: string;
}



