import { Component, OnInit } from '@angular/core';
import { SubCourse } from '../models/subCourse.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  subCourses: SubCourse[];
  constructor() { }
  editableCourses = ['0', '1']
  eidtCourse: string;
  editTitle: string;
  editAuthor: string;
  model: SubCourse;
  ngOnInit() {
    this.subCourses = [{
      id: '0',
      title: 'Programozás 2 Gyakorlat',
      editors: ['Alexin Zoltán'],
      videos: []
    }, {
      id: '1',
      title: 'Programozás 2 előadás',
      editors: ['Alexin Zoltán'],
      videos: []
    }]
  }

  checkEditmode(id: string) {
    return !!this.editableCourses[id];
  }
  selectEdit(id: string) {
    this.eidtCourse = id;
    if (id) {
      const selectedCourse = this.subCourses.filter((course) => {
        return course.id === id
      });
      this.editTitle = selectedCourse[0].title;
      this.editAuthor = selectedCourse[0].editors.toString();
      this.model = selectedCourse[0];
    }
  }
  save() {
    console.log(this.model)
  }


}
