import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AccountType } from './account-type.model';
import { Event } from '../events/event.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;

  constructor() {
    this.user = new User('Carlos', new AccountType(0, 'Non-Premium'), new Array<Event>());
  }

  getUser(): User {
    return this.user;
  }

  registerUserOnEvent(event: Event) {
    this.user.events.push(event);
  }

  isEventRegistred(eventId: number) {
     let events: Array<Event> = new Array<Event>();

     events = this.user.events.filter( e => e.id === eventId);

     return (events.length !== 0);
  }

  removeEventRegistred(event: Event) {
    const index: number = this.user.events.indexOf(event);
    if (index !== -1) {
        this.user.events.splice(index, 1);
    }
 }
 
}
