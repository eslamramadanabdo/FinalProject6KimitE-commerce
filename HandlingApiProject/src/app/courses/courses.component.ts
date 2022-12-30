import { CoursesServicesService } from './../Services/courses-services.service';
import { Component, OnInit } from '@angular/core';
import { Courses } from '../Models/Courses';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent  {

  cources : Courses = new Courses();

  constructor(   public serv : CoursesServicesService   ) {

    this.serv.get().subscribe(  (data : Courses)=>{
      this.cources = data;
    } );

   }


   deleteCourse(id){
      this.serv.delete(id).subscribe( (data : Courses)=>{
        window.location.reload();
      } );
    }


}
