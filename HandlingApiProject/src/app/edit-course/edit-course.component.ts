import { CoursesServicesService } from './../Services/courses-services.service';
import { SharedServicesService } from './../Services/shared-services.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Courses } from '../Models/Courses';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent  {
  cources : Courses = new Courses();
  id;
  constructor( public activerout: ActivatedRoute , public router:Router , public serve : CoursesServicesService ) {

    this.id =  this.activerout.snapshot.paramMap.get('id');

    this.serve.getById(this.id).subscribe( (data:Courses)=>{
      this.cources =data;
    } );

   }


   updateCourse(){
    this.serve.update(this.id , this.cources).subscribe((data:Courses)=>{
      this.router.navigateByUrl('/courses');
    });
  }




}
