import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model';
import { courseMock } from './coursemock';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss']
})
export class MyCoursesComponent implements OnInit {
  courseList: Course[] = courseMock;
  editableCourses = ['0', '1']
  eidtCourse: string;
  editTitle: string;
  editDescription: string;
  editImage: string;
  model: Course;
  constructor() { }
  ngOnInit(): void {
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
