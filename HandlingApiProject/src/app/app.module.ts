import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from "@angular/forms";
import { SubstrPipe } from './Pipes/substr.pipe';


import { HttpClientModule } from "@angular/common/http";
import { NavbareComponent } from './Shared/navbare/navbare.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';

import { AddNewCourseComponent } from './add-new-course/add-new-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { ListComponent } from './Trainer/list/list.component';
import { AddComponent } from './Trainer/add/add.component';
import { EditComponent } from './Trainer/edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    SubstrPipe,
    NavbareComponent,
    FooterComponent,
    HomeComponent,
    CoursesComponent,

    AddNewCourseComponent,

    EditCourseComponent,

    ListComponent,

    AddComponent,

    EditComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
