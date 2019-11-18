import { Country } from './country.model';
import { EventType } from './event-type.model';
import { AccountType } from '../shared/account-type.model';

export class Event {

    public id: number;
    public name: string;
    public country: Country;
    public accessLevel: AccountType;
    public type: EventType;
    public startDate: Date;
    public endDate: Date;
    public shortDescription: string;

    constructor(id: number, name: string, country: Country, accessLevel: AccountType, type: EventType, startDate: Date, endDate: Date, shortDescription: string) {
        this.id = id;
        this.name = name;
        this.country = country;
        this.accessLevel = accessLevel;
        this.type = type;
        this.startDate = startDate;
        this.endDate = endDate;
        this.shortDescription = shortDescription;
    }
}