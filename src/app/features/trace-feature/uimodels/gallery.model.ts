import { Image } from "./image.model";
import { Video } from "./video.model";

export interface Gallery{
    images: Image[];
    videos: Video[];
}