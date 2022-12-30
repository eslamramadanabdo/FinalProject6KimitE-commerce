import { Trainers } from './../Models/Trainer';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Courses } from '../Models/Courses';

@Injectable({
  providedIn: 'root'
})
export class SharedServicesService<T> {

  APIURL :string;

  constructor( public http : HttpClient  , @Inject(String) public ahmed : string) {
    this.APIURL = ahmed;
  }


  get() : Observable<T> {

    return  this.http.get<T>(this.APIURL);
  }

  getById(id): Observable<T>{
    return this.http.get<T>(this.APIURL + `/${id}`);
  }

  post( course:T ): Observable<T>{
    return this.http.post<T>(this.APIURL , course );
  }

  delete(id): Observable<T>{
    return this.http.delete<T>(this.APIURL + `/${id}`);
  }

  update( id  , course:T ): Observable<T>{
    return this.http.put<T>(this.APIURL + `/${id}` , course);
  }

}
