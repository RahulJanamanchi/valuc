import { Injectable,OnInit, EventEmitter, Output} from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ButtonSelectionService implements OnInit{

  @Output() style: EventEmitter<any> = new EventEmitter<any>();
  @Output() productView: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }
  flag:boolean=false;
  
  changeStyle(newStyle: boolean)
  {
    if(!this.flag)
      {
        this.style.emit(false);
        this.flag=true;
      }
    else
      this.style.emit(newStyle);
  }
 
  changeProductView(newView: boolean)
  {
      this.productView.emit(newView);
  }

  
}
