import {Image} from './image.interface';

export interface Show {
  id: string;
  name: string;
  genres: string[];
  image: Image;
}
