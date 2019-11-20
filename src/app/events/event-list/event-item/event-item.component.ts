import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Event } from '../../event.model';
import { EventService } from '../../event.service';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss']
})
export class EventItemComponent implements OnInit {

  breakpoint: number;

  @Input() event: Event;

  constructor(private userService: UserService) { }

  ngOnInit() {}

   getUser(): User {
    return this.userService.getUser();
  }

  onRegister() {
    if (this.isUserRegistredOnEvent() === true) {
      this.userService.removeEventRegistred(this.event);
    } else {
      this.userService.registerUserOnEvent(this.event);
    }
  }

  isEventPassed() {
    return (this.event.startDate.getTime() < new Date().getTime());
  }

  isUserRegistredOnEvent(): boolean {
    return this.userService.isEventRegistred(this.event.id);
  }
}
