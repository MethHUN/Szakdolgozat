import {SubCourse} from './subCourse.model';

export class Course {
  id: string;
  title: string;
  editors: string[];
  subCourse: SubCourse[];
  isPublic: Boolean;
  image: String;
  description: string;
}
