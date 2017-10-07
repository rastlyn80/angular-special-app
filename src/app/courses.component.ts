import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  template: `
        <h2>{{ getTitle() }}</h2>
        <ul>
            <li *ngFor="let course of courses">
              {{ course }}
            </li>
        </ul>
        <button (click)= "onSave($event)" class="btn btn-primary" [class.active]="isActive" [style.backgroundColor]="isActive ? 'blue' : 'red'">Save</button>        
        `
})

export class CoursesComponent {
  isFavorite = false;
  title = "List of courses";
  isActive = false;
  courses;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  getTitle() {
    return this.title;
  }

  onSave($event) {
    console.log("Save button clicked. Event: ", $event)
  }
}