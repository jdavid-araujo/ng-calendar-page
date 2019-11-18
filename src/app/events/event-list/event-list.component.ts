import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../event.model';
import { EventSelectEmitter } from '../event-select-emitter.model';
import { stringify } from 'querystring';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  eventsMock: Array<Event>;
  eventFilter: EventSelectEmitter
  eventsFilterMock: Array<Event>;

  constructor(private eventService: EventService) { 
    this.eventsMock = new Array<Event>();
    this.eventsFilterMock = new Array<Event>();
  }

  ngOnInit() {
    this.eventsMock = this.eventService.getEventsMock();
    this.eventsFilterMock = this.eventsMock;
  }

  filterChange(eventFilter: EventSelectEmitter) {
    this.eventFilter = eventFilter;
    let countryCity: string[] = [];                   ;

    for (let filter of eventFilter.eventLocation) {
      countryCity.push(filter.item);
    }


    this.filterEventType(countryCity);
  }

  isEventinThisLocation(event: Event, countryCity: string[]): boolean {
  return (countryCity.includes(event.country.city) || (countryCity.includes(event.country.name)));
  }

  filterEventType(countryCity: string[]) {
    this.eventsFilterMock = new Array<Event>();

    for (let index = 0; index < this.eventsMock.length; index++) {

        if (((this.eventFilter.eventAccountType[0] == true) && (this.eventFilter.eventAccountType[1] == true))
            ||  ((this.eventFilter.eventAccountType[0] == false) && (this.eventFilter.eventAccountType[1] == false))) {
              if(this.eventFilter.eventLocation.length == 0) {
                this.eventsFilterMock = this.eventsMock;
                break;
              } else {
                this.eventsFilterMock = this.eventsMock.filter(event => this.isEventinThisLocation(event, countryCity));
                break;
              }
        }

        if ((this.eventFilter.eventAccountType[0] == true) && (this.eventsMock[index].accessLevel.id == 0)) {
          if(this.eventFilter.eventLocation.length == 0) {
            this.eventsFilterMock.push(this.eventsMock[index]);
          } else {
            if(countryCity.includes(this.eventsMock[index].country.city) || countryCity.includes(this.eventsMock[index].country.name)) {
              this.eventsFilterMock.push(this.eventsMock[index]);
            }
          }
        } 

        if ((this.eventFilter.eventAccountType[1] == true) && (this.eventsMock[index].accessLevel.id == 1)) {
          if(this.eventFilter.eventLocation.length == 0) {
            this.eventsFilterMock.push(this.eventsMock[index]);
          } else {
            if(countryCity.includes(this.eventsMock[index].country.city) || countryCity.includes(this.eventsMock[index].country.name)) {
              this.eventsFilterMock.push(this.eventsMock[index]);
            }
          }       
         } 
    }

    if(this.eventFilter.eventType.length !== 0) {
      this.eventsFilterMock = this.eventsFilterMock.filter(event => this.eventFilter.eventType.includes(event.type.id));
    }
  }
}
