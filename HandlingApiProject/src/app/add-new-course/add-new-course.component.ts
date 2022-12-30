import { CoursesServicesService } from './../Services/courses-services.service';
import { SharedServicesService } from './../Services/shared-services.service';
import { Component, OnInit } from '@angular/core';
import { Courses } from '../Models/Courses';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-course',
  templateUrl: './add-new-course.component.html',
  styleUrls: ['./add-new-course.component.css']
})
export class AddNewCourseComponent {
  cources : Courses = new Courses();
  constructor( public serv : CoursesServicesService , public router : Router ) { }


  addCourse(){
    this.serv.post(this.cources).subscribe( (data:Courses)=>{
      console.log("yes add new course");
      this.router.navigateByUrl('/courses');

    } )
  }


}
