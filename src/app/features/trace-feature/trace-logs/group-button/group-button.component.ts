import { Component, OnInit, Input, Output } from '@angular/core';
import { TrackerNode } from '../../uimodels/trackernode.model';
import * as _ from 'lodash';
import { ItemDetailsService } from '../../services/itemdetails.service';
import { GroupButtonService } from './groupbutton.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-group-button',
  templateUrl: './group-button.component.html',
  styleUrls: ['./group-button.component.scss']
})
export class GroupButtonComponent implements OnInit {
  @Input() label:string;
  @Input() node:TrackerNode;
  @Input() show:boolean;
  @Output() click=new EventEmitter();
  display:string="";

  enableStyle:boolean=false;
  
  constructor(private itemDetailsService:ItemDetailsService,private groupButtonService:GroupButtonService) { }

  ngOnInit() {
    
    this.groupButtonService.sub.subscribe(newVal=>{
      if(this.enableStyle)
        this.enableStyle=newVal
    });
    if(!this.show){
      this.display='none';
    }
  }

  loadDetails(){
    this.groupButtonService.disableAllButtons(false);
    this.groupButtonService.sendData(this.node);
    
    this.enableStyle=true;
  }

}
