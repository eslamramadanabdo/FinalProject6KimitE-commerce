import { SharedServicesService } from './shared-services.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trainers } from '../Models/Trainer';

@Injectable({
  providedIn: 'root'
})
export class TrainersServicesService extends SharedServicesService<Trainers>  {

  constructor(public http : HttpClient ) {
    super(http , "http://localhost:3000/trainers"  )
   }
   
}
