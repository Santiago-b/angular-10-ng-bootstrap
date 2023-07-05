import { Component } from '@angular/core';
import { NgbCalendar, NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  today = this.calendar.getToday();
  model: NgbDateStruct;
  date: NgbDate;

  constructor(private calendar: NgbCalendar) {}

  selectToday() {
    this.model = this.calendar.getToday();
    this.date = this.calendar.getToday();
  }

  clearDate() {
    this.model = null;
  }
}
