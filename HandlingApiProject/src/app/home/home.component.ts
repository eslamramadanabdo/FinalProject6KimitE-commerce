import { CoursesServicesService } from './../Services/courses-services.service';
import { SharedServicesService } from './../Services/shared-services.service';
import { Component, OnInit } from '@angular/core';
import { Courses } from '../Models/Courses';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  cources : Courses = new Courses();

  constructor(   public serv : CoursesServicesService   ) {

    this.serv.get().subscribe(  (data : Courses)=>{
      this.cources = data;
    } );

   }




}
