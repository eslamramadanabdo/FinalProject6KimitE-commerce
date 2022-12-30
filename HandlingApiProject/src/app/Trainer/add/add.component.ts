import { TrainersServicesService } from './../../Services/trainers-services.service';
import { Trainers } from './../../Models/Trainer';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent  {


  trainer : Trainers = new Trainers();

  constructor(  public trainerServ : TrainersServicesService , public router : Router ) { }

  addTrainer(){
    this.trainerServ.post(this.trainer).subscribe( (data)=>{
      this.router.navigateByUrl('/trainer/list');
    }  );
  }
}
