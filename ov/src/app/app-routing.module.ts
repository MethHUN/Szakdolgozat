import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyCoursesComponent} from './my-courses/my-courses.component';
import {HomeComponent} from './home/home.component';
import {VideoComponent} from './video/video.component';
import { CourseComponent } from './course/course.component';
import { LogInComponent } from './logIn/logIn.component';
import { RegistrationComponent } from './registration/registration.component';
import {EditUserComponent} from './edit-user/edit-user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'video', component: VideoComponent },
  { path: 'mycourses', component: MyCoursesComponent },
  { path: 'course', component: CourseComponent },
  { path: 'login', component: LogInComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'editUser', component: EditUserComponent },
  { path: '**', component: MyCoursesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
