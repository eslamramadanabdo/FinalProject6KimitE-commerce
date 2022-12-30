import { TrainersServicesService } from './../../Services/trainers-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Trainers } from 'src/app/Models/Trainer';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent  {
  trainer : Trainers = new Trainers();
  id;
  constructor(  public activeRoute: ActivatedRoute  , public TrainerServ : TrainersServicesService , public router :Router ) {
     this.id=   this.activeRoute.snapshot.paramMap.get('id');

     this.TrainerServ.getById(this.id).subscribe( (data:Trainers)=>{
        this.trainer = data;
     } );
  }


  updateTrainer(){
    this.TrainerServ.update( this.id , this.trainer ).subscribe( (data)=>{
      this.router.navigateByUrl('/trainer/list');
    } );
  }



}
