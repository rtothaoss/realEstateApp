import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { RegisterComponent } from './register.component';

const routerMock = {
  navigate: jest.fn(),
};

const initialState = {
  user: {},
};

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let store: MockStore;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [RegisterComponent],
      providers: [
        provideMockStore({
          initialState: initialState,
        }),
        { provide: Router, useValue: routerMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set loadingSubject to a behaviorSubject and set it to false', () => {
    expect(component.loadingSubject.value).toEqual(false);
  });
  it('should set loading$ to an observable', () => {
    expect(typeof component.loading$).toEqual(typeof component.loadingSubject.asObservable());
  });
  it('should set form to a formGroup with 2 input fields defaulted to empty strings', () => {
    expect(component.form.get('email')?.value).toEqual('');
    expect(component.form.get('password')?.value).toEqual('');
  });

  describe('submit', () => {
    it('should return if the form is invalid', () => {
      expect(component.submit()).toEqual(undefined);
    });

    it('should set loadingSubject value to true', () => {
      component.email?.setValue('test@test.com');
      component.password?.setValue('123');
      component.submit();
      expect(component.loadingSubject.value).toEqual(true);
    });

    it('should call dispatch on store', () => {
      const storeSpy = jest.spyOn(store, 'dispatch');
      component.email?.setValue('test@test.com');
      component.password?.setValue('123');
      const data = {
        type: '[User] Register Request',
        user: component.form.value,
      };
      component.submit();
      expect(storeSpy).toHaveBeenCalledTimes(1);
      expect(storeSpy).toHaveBeenCalledWith(data);
    });
  });
});
