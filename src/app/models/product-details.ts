import { Evidences } from './evidences';

  export interface ProductData{
  product: {
  name: string;
  brand: string;
  quantity: string;
  mfgDate: string;
  expDate: string;
  productEvidences: keyValues;
  },
  businessUnit:{
  name: string;
  details: string;
  destinationAddress: string;
  keyValues: keyValues;
  },
  orderDetails:{
  sourceAddress: string;
  },
  children: ProductData[];
  }


export type keyValues = KeyValue[];
export interface KeyValue{
    name: string;
    imageUrl: string;
    color: string,
    evidences: Evidences;
    
}
 