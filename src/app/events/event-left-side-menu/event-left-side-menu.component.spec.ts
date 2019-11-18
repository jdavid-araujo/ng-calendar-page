import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventLeftSideMenuComponent } from './event-left-side-menu.component';

describe('EventLeftSideMenuComponent', () => {
  let component: EventLeftSideMenuComponent;
  let fixture: ComponentFixture<EventLeftSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventLeftSideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventLeftSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
