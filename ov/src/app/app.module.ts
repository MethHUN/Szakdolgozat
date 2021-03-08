import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { VideoComponent } from './video/video.component';
import { CourseComponent } from './course/course.component';
import { RegistrationComponent } from './registration/registration.component';
import { LogInComponent } from './logIn/logIn.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { EditUserComponent } from './edit-user/edit-user.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MyCoursesComponent,
    FooterComponent,
    HomeComponent,
    VideoComponent,
      CourseComponent,
      RegistrationComponent,
      LogInComponent,
      EditUserComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatPaginatorModule,
    MatInputModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
