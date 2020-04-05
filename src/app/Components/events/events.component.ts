import { EventsService } from './../../services/events.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './Events.Component.html',
  styleUrls: ['./Events.Component.css']
})
export class EventsComponent implements OnInit {
  constructor(private _events: EventsService) {}
  public events = [];
  ngOnInit(): void {
    this._events.getEvents().subscribe(
      res => {
        (this.events = res), console.log(this.events);
      },
      err => console.log(err)
    );
    console.log(this.events);
  }
}
