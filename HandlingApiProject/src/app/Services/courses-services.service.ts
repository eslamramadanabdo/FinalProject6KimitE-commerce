import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Courses } from '../Models/Courses';
import { SharedServicesService } from './shared-services.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesServicesService  extends SharedServicesService<Courses> {

  constructor(  public http : HttpClient ) {
    super( http , "http://localhost:3000/courses" );
  }
}
