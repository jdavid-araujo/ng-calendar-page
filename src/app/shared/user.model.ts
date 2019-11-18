import { Event } from '../events/event.model';
import { AccountType } from './account-type.model';

export class User {

    public name: string;
    public accountype: AccountType;
    public events: Array<Event>;

    constructor(name: string, accountype: AccountType, events: Array<Event>) {
        this.name = name;
        this.accountype = accountype;
        this.events = events;
    }
}