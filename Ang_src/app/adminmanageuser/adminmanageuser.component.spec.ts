import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmanageuserComponent } from './adminmanageuser.component';

describe('AdminmanageuserComponent', () => {
  let component: AdminmanageuserComponent;
  let fixture: ComponentFixture<AdminmanageuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminmanageuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmanageuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
