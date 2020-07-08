import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmanageaccountsComponent } from './adminmanageaccounts.component';

describe('AdminmanageaccountsComponent', () => {
  let component: AdminmanageaccountsComponent;
  let fixture: ComponentFixture<AdminmanageaccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminmanageaccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmanageaccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
