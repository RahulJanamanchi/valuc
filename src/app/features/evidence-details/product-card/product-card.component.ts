import { Component, Input, AfterViewInit, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { EvidenceDetailsService } from '../services/evidence-details.service';
import { ButtonSelectionService } from '../services/button-selection.service';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit, AfterViewInit {
  @Input() product: any[];
  @Input() title: string;
  @Input() brand: string;
  @Input() evidenceType;
  @Input() numberOfProducts:number;

  productDetails=[];
  pilltype:string = 'Product';

  constructor(private evidenceDetailsService: EvidenceDetailsService,private buttonSelection:ButtonSelectionService) {
    
  }
  visible:boolean=true;
  flag:boolean=false;
  isZero:boolean=false;
  buttonText:string="View";
  productLevelFlag:boolean=true;
  toggleExpanded(){
    
    if(this.flag)
    {
      this.isZero=false;
      this.buttonText="View"
      if(this.visible){
      this.buttonSelection.changeProductView(true);
      this.visible=true;
      this.flag=false;
      }
    }
    else{
        if(this.numberOfProducts-1 == 1) 
        {
          this.buttonText="+"+String(this.numberOfProducts-1)+" item";
        }
        else if(this.numberOfProducts-1 == 0){
            this.isZero=true;
        }
        else{
          this.buttonText="+"+String(this.numberOfProducts-1)+" items";
        }
      this.flag = true;
      this.buttonSelection.changeProductView(false);
    }
  }
  ngAfterViewInit() {
    
    //this.product=this.product['0']['evidences']['evidenceList'];
    
    this.setProductData(this.product['0']);

    this.evidenceDetailsService.productDetails.subscribe(prodDetails =>{
    this.setProductData(prodDetails);
    })
    
  }

  ngOnInit(){
    this.buttonSelection.productView.subscribe(selected=>{
      if(this.flag==true){
        this.visible= !selected;
      }else{
        this.visible= selected;
      }
    });
    
  }
  // Graph
  canvas: any;
  ctx: any;

  productEvidenceDetails: any[]=[];

  setProductData(evidence: any){
    this.productEvidenceDetails = evidence;
    if(this.productEvidenceDetails.length === 0)
    {
      this.productLevelFlag = false;
    }
    try{
      for(let graph of evidence['graphs']){
        this.makeGraph(graph['labels'],graph['data'],graph['title']);
        }
      }
    catch(e){

    }
  }

  makeGraph(labelInput, dataInput, title) {
    this.canvas = document.getElementById('myChart');
    do{
    this.ctx = this.canvas.getContext('2d');
    }while(this.ctx==undefined)

    let myChart = new Chart(this.ctx, {
      type: 'line',
      data: {
          labels: labelInput,
          datasets: [{
              label: title,
              data: dataInput,
              borderWidth: 2,
              borderColor: "crimson",
              backgroundColor: "crimson",
              fill: 50
          }]
      },
      options: {
        elements: {
          line:{
              tension: 0
          }
        } ,
        responsive: true
      }
    });
  }
}
