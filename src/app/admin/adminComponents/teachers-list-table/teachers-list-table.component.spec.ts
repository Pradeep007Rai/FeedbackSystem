import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersListTableComponent } from './teachers-list-table.component';

describe('TeachersListTableComponent', () => {
  let component: TeachersListTableComponent;
  let fixture: ComponentFixture<TeachersListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachersListTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
