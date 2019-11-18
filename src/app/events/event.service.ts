import { Injectable } from '@angular/core';
import { Event } from './event.model';
import { EventType } from './event-type.model';
import { AccountType } from '../shared/account-type.model';
import { Country } from './country.model';
import { TodoItemNode } from '../shared/todo-item-node.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  dataChangeLocationTree = new BehaviorSubject<TodoItemNode[]>([]);
  get data(): TodoItemNode[] { return this.dataChangeLocationTree.value; }


  constructor() {
    this.initLocationTree();
   }

  getEventsMock(): Array<Event> {
    let events: Array<Event> = new Array<Event>();
    
    events.push(new Event(1, 'Test1', new Country('Canada', 'Toronto'), new AccountType(0, 'Non-Premium'), new EventType(0, 'Leaps'),new Date(), new Date(), 'test'));
    events.push(new Event(2, 'Test2', new Country('Canada', 'Toronto'), new AccountType(1, 'Premium'), new EventType(1, 'Recruiting missions'),new Date(), new Date(), 'test'));
    events.push(new Event(3, 'Test3', new Country('Canada', 'Montreal'), new AccountType(1, 'Premium'), new EventType(2, 'Q&A Sessions'),new Date(), new Date(), 'test'));
    events.push(new Event(4, 'Test4', new Country('United Kingdom', 'London'), new AccountType(0, 'Non-Premium'), new EventType(0, 'Leaps'),new Date(), new Date(), 'test'));
    events.push(new Event(5, 'Test5', new Country('United Kingdom', 'Liverpool'), new AccountType(1, 'Premium'), new EventType(3, 'VanHackathons'),new Date(), new Date(), 'test'));

    return events;
  }

  getUserEventsMock() {

  }

  getEventsTypeMock(): Array<EventType> {
    let eventsType: Array<EventType> = new Array<EventType>();
    
    eventsType.push(new EventType(0, 'Leaps'));
    eventsType.push(new EventType(1, 'Recruiting missions'));
    eventsType.push(new EventType(2, 'Q&A Sessions'));
    eventsType.push(new EventType(3, 'VanHackathons'));
    eventsType.push(new EventType(4, 'Meetups '));

    return eventsType;
  }

  getAccountTypeMock(): Array<AccountType> {
    let accountTypes: Array<AccountType> = new Array<AccountType>();

    accountTypes.push(new AccountType(0, 'Non-Premium'));
    accountTypes.push(new AccountType(1, 'Premium'));

    return accountTypes;
  }

  getLocationMock(): {[key: string]: any} {
   /* let eventLocation: Array<Country> = new Array<Country>();

    eventLocation.push(new Country('Canada', 'Toronto'));
    eventLocation.push(new Country('Canada', 'Montreal'));
    eventLocation.push(new Country('United Kingdom', 'London'));
    eventLocation.push(new Country('United Kingdom', 'Liverpool'));
    */
    const TREE_COUNTRY = {
      Canada: [
        'Toronto',
        'Montreal'
      ]
      ,
      'United Kingdom': [
        'London',
        'Liverpool'
      ]
      }
    

    return TREE_COUNTRY;
   // return eventLocation;
  }

  applyEvent(eventId: number) {

  }

  initLocationTree() {
    const dataLocationTree = this.buildLocationTree(this.getLocationMock(), 0);

    this.dataChangeLocationTree.next(dataLocationTree);
  }

  buildLocationTree(obj: {[key: string]: any}, level: number): TodoItemNode[] {
    return Object.keys(obj).reduce<TodoItemNode[]>((accumulator, key) => {
      const value = obj[key];
      const node = new TodoItemNode();
      node.item = key;

      if (value != null) {
        if (typeof value === 'object') {
          node.children = this.buildLocationTree(value, level + 1);
        } else {
          node.item = value;
        }
      }

      return accumulator.concat(node);
    }, []);
  }


}
