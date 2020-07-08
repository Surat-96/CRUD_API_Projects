import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegValidationComponent } from './user-reg-validation.component';

describe('UserRegValidationComponent', () => {
  let component: UserRegValidationComponent;
  let fixture: ComponentFixture<UserRegValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRegValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
