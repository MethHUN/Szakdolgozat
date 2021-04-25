import { Course } from "../models/course.model";


const a = new Course;
const b = new Course;
const c = new Course;
const d = new Course;
const e = new Course;
const f = new Course;
const g = new Course;
const h = new Course;

a.id = '0';
b.id = '1';
c.id = '2';
d.id = '3';
e.id = '4';
f.id = '5';
g.id = '6';
h.id = '7';

a.title = 'Angular';
b.title = 'Programozás 2';
c.title = 'Szkriptnyelvek';
d.title = 'Programozás 1';
e.title = 'Kalkulus';
f.title = 'Agilis szoftverfejlesztés';
g.title = 'Rendszerfejlesztés';
h.title = 'PWA';

a.description = 'Some quick example text to build on the card title and make up the bulk of the cards content.';
b.description = 'Some quick example text to build on the card title and make up the bulk of the cards content.';
c.description = 'Some quick example text to build on the card title and make up the bulk of the cards content.';
d.description = 'Some quick example text to build on the card title and make up the bulk of the cards content. ';
e.description = 'Some quick example text to build on the card title and make up the bulk of the cards content.';
f.description = 'Some quick example text to build on the card title and make up the bulk of  ';
g.description = 'Some quick example text to build on the card title and make up the bulk of the cards content.';
h.description = 'Some quick example text to build on the card title and make up the bulk of the cards content.';

a.image = 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-pwa-course.png';
b.image = 'https://secureservercdn.net/198.71.233.107/25l.a4e.myftpupload.com/wp-content/uploads/2020/06/6038586442907648-720x340.png';
c.image = 'https://res.cloudinary.com/practicaldev/image/fetch/s--_pyWGSyD--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/w9u60357jk4ozdho7urq.jpg';
e.image = 'https://online-learning.harvard.edu/sites/default/files/styles/header/public/course/asset-v1_HarvardX%2BCalcAPL1x%2B2T2017%2Btype%40asset%2Bblock%40TITLE-Calculus-Applied-2120x1192-NO-SPOTLIGHT%202.png?itok=crWwjmVi'
d.image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoMexZUneqUa4NKmJoPV8naE3QewJ_euvGWA&usqp=CAU';
f.image = 'https://cdn.corporatefinanceinstitute.com/assets/agilel-project-management.jpeg';
g.image = 'https://www.ferag.com/fileadmin/_processed_/f/7/csm_Header_control_system_b617aa2d33.jpg';
h.image = 'https://avengering.com/wp-content/uploads/2019/09/pwa_native_hybride-1200x900.jpg'
a.editors = ['Alexin Zoltán', 'Admin']
b.editors = ['Alexin Zoltán', 'Admin']
c.editors = ['Alexin Zoltán', 'Admin']
d.editors = ['Alexin Zoltán', 'Admin']
e.editors = ['Alexin Zoltán', 'Admin']
f.editors = ['Alexin Zoltán', 'Admin']
g.editors = ['Alexin Zoltán', 'Admin']
h.editors = ['Alexin Zoltán', 'Admin']


export const courseMock=[a,b,c,d,e,f,g,h]

//export class Course {
  //  id: string;
    //title: string;
    //editors: string[];
    //subCourse: SubCourse[];
    //isPublic: Boolean;
    //image: String;
   // description: string;
  //}