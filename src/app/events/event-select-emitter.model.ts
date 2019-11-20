import { TodoItemFlatNode } from '../shared/todo-item-flat-node.model';
import { SelectionModel } from '@angular/cdk/collections';

export class EventSelectEmitter {
    public eventAccountType: boolean[];
    public eventLocation: TodoItemFlatNode[];
    public eventType: number[];
    public eventDate: Date;

    constructor(eventAccountType: boolean[], eventLocation: TodoItemFlatNode[], eventType: number[], eventDate: Date) {
        this.eventAccountType = eventAccountType;
        this.eventLocation = eventLocation;
        this.eventType = eventType;
        this.eventDate = eventDate;
    }
}