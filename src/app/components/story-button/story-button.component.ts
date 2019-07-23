import { Component, OnInit, Input } from '@angular/core';
import { StoryCategory} from '../../models/storyInterface';
import {StoryDetailsService} from './story-service/story-details.service';

@Component({
  selector: 'app-story-button',
  templateUrl: './story-button.component.html',
  styleUrls: ['./story-button.component.scss']
})
export class StoryButtonComponent implements OnInit {
  @Input() story: StoryCategory;
  @Input() page: boolean;
  
  
  flag:boolean=false;
  constructor(private storyService:StoryDetailsService) {
    
   }
  
  ngOnInit() {
  
  }
  setStory(){
      this.storyService.storyDetailMethod(this.story);
     
  }

}
