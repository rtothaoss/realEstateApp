import { AbstractControl } from '@angular/forms';
import { ErrorEntity, Login, UserEntity } from './api-interfaces';

export interface LoginForm {
  email: AbstractControl<string>;
  password: AbstractControl<string>;
}

export interface HomeDataInterface {
  status: string,
  data: Record<string, unknown>;
}


export type UserUI = UserEntity;
export type LoginUI = Login;
export type ErrorUI = ErrorEntity;
