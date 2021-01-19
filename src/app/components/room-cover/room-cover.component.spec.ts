import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomCoverComponent } from './room-cover.component';

describe('RoomCoverComponent', () => {
  let component: RoomCoverComponent;
  let fixture: ComponentFixture<RoomCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomCoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
