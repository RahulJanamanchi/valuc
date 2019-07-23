import { Component, Input, Output, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { EvidenceDetailsService } from '../../features/evidence-details/services/evidence-details.service';
import { ButtonSelectionService } from '../../features/evidence-details/services/button-selection.service';
@Component({
  selector: 'app-button-pill',
  templateUrl: './button-pill.component.html',
  styleUrls: ['./button-pill.component.scss']
})
export class ButtonPillComponent implements OnInit,OnDestroy {

  @Input() evidence: any;
  @Input() pillType:string;
 
  constructor(private evidenceDetailsService: EvidenceDetailsService, private buttonSelection:ButtonSelectionService ) { 
  }
  isSelected:boolean=false;
  ngOnInit() {
    this.buttonSelection.style.subscribe(selected=>{
      this.isSelected=selected;
    });
  }
  
  sendEvidence(){
    this.buttonSelection.changeStyle(false);
    this.isSelected = true;
    if(this.pillType =='Node'){
      this.evidenceDetailsService.newNodeDetails(this.evidence);
    }
    if(this.pillType =='Product'){
      this.evidenceDetailsService.newProductDetails(this.evidence);
    }
  }

  ngOnDestroy(): void {
  
  }
}
