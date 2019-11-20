import { Injectable } from '@angular/core';
import { Event } from './event.model';
import { EventType } from './event-type.model';
import { AccountType } from '../shared/account-type.model';
import { Country } from './country.model';
import { TodoItemNode } from '../shared/todo-item-node.model';
import { BehaviorSubject } from 'rxjs';
import { User } from '../shared/user.model';

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

    events.push(new Event(1, 'Event1', new Country('Canada', 'Toronto', 'https://vanhackblobstorageprod.blob.core.windows.net/img/events/thumbnail/1e2d6be2-b729-4ebb-8d0c-2c75035efbee.jpg'), new AccountType(0, 'Non-Premium'), new EventType(0, 'Leaps'),new Date('11-21-2019'), new Date('11-30-2019'), 'The event is about......'));
    events.push(new Event(2, 'Event2', new Country('Canada', 'Toronto', 'https://vanhackblobstorageprod.blob.core.windows.net/img/events/thumbnail/1e2d6be2-b729-4ebb-8d0c-2c75035efbee.jpg'), new AccountType(1, 'Premium'), new EventType(1, 'Recruiting missions'),new Date('11-28-2019'), new Date('11-29-2019'), 'The event is about......'));
    events.push(new Event(3, 'Event3', new Country('Canada', 'Montreal', 'https://vanhackblobstorageprod.blob.core.windows.net/img/events/thumbnail/351665ed-4492-4749-ba43-c8e58f14888e.jpg'), new AccountType(1, 'Premium'), new EventType(2, 'Q&A Sessions'),new Date('12-03-2020'), new Date('12-31-2020'), 'The event is about......'));
    events.push(new Event(4, 'Event4', new Country('United Kingdom', 'London', 'https://vanhackblobstorageprod.blob.core.windows.net/img/events/thumbnail/4d8170b8-9ba6-4365-82ae-f028f02b281c.jpg'), new AccountType(0, 'Non-Premium'), new EventType(0, 'Leaps'),new Date('12-02-2019'), new Date('12-30-2019'), 'The event is about......'));
    events.push(new Event(5, 'Event5', new Country('United Kingdom', 'Liverpool', 'https://vanhackblobstorageprod.blob.core.windows.net/img/events/thumbnail/9e7bf694-b476-4b93-8981-68c36fbc7235.jpg'), new AccountType(1, 'Premium'), new EventType(3, 'VanHackathons'),new Date('01-01-2020'), new Date('01-08-2020'), 'The event is about......'));
    events.push(new Event(6, 'Event6', new Country('United Kingdom', 'London', 'https://vanhackblobstorageprod.blob.core.windows.net/img/events/thumbnail/4d8170b8-9ba6-4365-82ae-f028f02b281c.jpg'), new AccountType(0, 'Non-Premium'), new EventType(0, 'Leaps'),new Date('01-02-2020'), new Date('03-08-2020'), 'The event is about......'));
    events.push(new Event(7, 'Event7', new Country('United Kingdom', 'London', 'https://vanhackblobstorageprod.blob.core.windows.net/img/events/thumbnail/4d8170b8-9ba6-4365-82ae-f028f02b281c.jpg'), new AccountType(0, 'Non-Premium'), new EventType(0, 'Leaps'),new Date('9-02-2019'), new Date('10-21-2019'), 'The event is about......'));
    events.push(new Event(8, 'Event8', new Country('Canada', 'Montreal', 'https://vanhackblobstorageprod.blob.core.windows.net/img/events/thumbnail/351665ed-4492-4749-ba43-c8e58f14888e.jpg'), new AccountType(0, 'Non-Premium'), new EventType(0, 'Leaps'),new Date('12-02-2019'), new Date('02-20-2020'), 'The event is about......'));

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
