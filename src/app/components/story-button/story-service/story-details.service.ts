import { Injectable,Output,EventEmitter, OnInit} from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { StoryCategory} from '../../../models/storyInterface';

@Injectable({
  providedIn: 'root'
})
export class StoryDetailsService {
  @Output() toProduct: EventEmitter<any> = new EventEmitter<any>();
  @Output() storyDetails: ReplaySubject<any> = new ReplaySubject<any>(1);
  constructor() {
   }
   
  storyDetailMethod(details: StoryCategory){
    
    this.storyDetails.next(details);
    this.toProduct.emit(details);
  }
  
}
