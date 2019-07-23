import { Image} from '../features/trace-feature/uimodels/image.model';
import { Video } from '../features/trace-feature/uimodels/video.model';

export interface StoryData{
    stories:StoryCategory[];
}
export interface StoryCategory{
    title:string;
    logoUrl:string;
    imageUrl:string;
    description:string;
    story: Story[];
  }
  export interface Story{
    title:string;
    imageUrl:string;
    imageData:string
    videoUrl:string;
    videoData:string;
  }
  