import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserafterloginComponent } from './userafterlogin.component';

describe('UserafterloginComponent', () => {
  let component: UserafterloginComponent;
  let fixture: ComponentFixture<UserafterloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserafterloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserafterloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
