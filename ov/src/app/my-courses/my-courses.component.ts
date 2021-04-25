import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Course } from '../models/course.model';
import { courseMock } from './coursemock';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss']
})
export class MyCoursesComponent implements OnInit {
  
  courseMockList: Course[] = courseMock;
  courseList = this.courseMockList.slice(0,8);

  lengthPaginator: number;
  editableCourses = ['0', '1']
  eidtCourse: string;
  editTitle: string;
  editDescription: string;
  editImage: string;
  model: Course;
  pageEvent: PageEvent;

  constructor() { }


  ngOnInit(): void {

    this.lengthPaginator = this.courseMockList.length
  }


  checkEditmode(id: string) {
    return !!this.editableCourses[id];
  }


  selectEdit(id: string) {
    this.eidtCourse = id;
    if (id) {
      const selectedCourse = this.courseList.filter((course) => {
        return course.id === id
      });
      this.editTitle = selectedCourse[0].title;
      this.editImage = selectedCourse[0].image;
      this.editDescription = selectedCourse[0].description;
      this.model = selectedCourse[0];
    }
  }
  save() {
    console.log(this.model)
    this.eidtCourse = null
  }

}
