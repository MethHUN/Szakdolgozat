import { Component, OnInit } from '@angular/core';
import { SubCourse } from '../models/subCourse.model';

@Component({
  selector: 'app-find-course',
  templateUrl: './find-course.component.html',
  styleUrls: ['./find-course.component.scss']
})
export class FindCourseComponent implements OnInit {

  subCourses:SubCourse[]

  constructor() { }

  ngOnInit(): void {

  }
  search(){

  }

}
