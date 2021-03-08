import {Comments} from './comments.model';

export class Video {
  id: string;
  title: string;
  comments: Comments[];
  url: string;
  authors: string[];
  date: string;
  isPublic: boolean;
  description: string;
}
