import { Component, OnInit } from '@angular/core';
import { SubCourse } from '../models/subCourse.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
subCourses:SubCourse[] ;
  constructor() { }

  ngOnInit() {

    this.subCourses = [{
      id:'0',
      title:'Programozás 2 Gyakorlat',
      editors:['Alexin Zoltán'],
      videos:[]
    }]
  }

}
