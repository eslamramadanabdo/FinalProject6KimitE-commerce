import { Router } from '@angular/router';
import { TrainersServicesService } from './../../Services/trainers-services.service';
import { Component, OnInit } from '@angular/core';
import { Trainers } from 'src/app/Models/Trainer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {

  Trainers :Trainers = new Trainers();

  constructor(  public trainerServices : TrainersServicesService , public router:Router  ) {

    this.trainerServices.get().subscribe((data : Trainers )=>{
      this.Trainers = data;
    });

  }


  deleteTrainer(id){
    this.trainerServices.delete(id).subscribe(  (data)=>{
      window.location.reload();
    } );
  }




}
