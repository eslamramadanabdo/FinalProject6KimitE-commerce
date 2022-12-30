import { EditCourseComponent } from './edit-course/edit-course.component';
import { AddNewCourseComponent } from './add-new-course/add-new-course.component';

import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './Trainer/list/list.component';
import { AddComponent } from './Trainer/add/add.component';
import { EditComponent } from './Trainer/edit/edit.component';


const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'home' , component : HomeComponent},
  {path : 'courses' , component : CoursesComponent},
  {path : 'addNewCourse' , component: AddNewCourseComponent},
  {path : 'editCourse/:id' , component : EditCourseComponent},
  {path:  'trainer/list' , component: ListComponent},
  {path: 'trainer/add' , component: AddComponent},
  {path: 'trainer/edit/:id' , component: EditComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
