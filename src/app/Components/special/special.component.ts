import { Router } from '@angular/router';
import { EventsService } from './../../services/events.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css']
})
export class SpecialComponent implements OnInit {
  constructor(private _events: EventsService, private _router: Router) {}
  specialEvents = [];
  ngOnInit(): void {
    this._events.getSpecialEvents().subscribe(
      res => {
        (this.specialEvents = res), console.log(this.specialEvents);
      },
      err => {
        console.log(err);
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this._router.navigate(['/login']);
          }
        }
      }
    );
  }
}
