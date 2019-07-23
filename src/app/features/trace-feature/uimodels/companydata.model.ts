import { Company } from "./company.model";
import { BusinessUnitData } from "./businessunitdata.model";

export interface CompanyData{
    company: Company;
    businessUnit:BusinessUnitData;
}