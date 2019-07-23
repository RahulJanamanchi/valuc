import { Subject } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class GroupButtonService{

    sub=new Subject<boolean>();
    clickData=new Subject<any>();

    constructor(){}

    disableAllButtons(newValue:boolean){
        this.sub.next(newValue);
    }

    sendData(data:any){
        this.clickData.next(data);
    }

}