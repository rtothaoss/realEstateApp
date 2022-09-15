import { AbstractControl } from '@angular/forms';
import { HttpStatus } from '@nestjs/common';
import { ErrorEntity, Login, UserEntity } from './api-interfaces';

export interface LoginForm {
  email: AbstractControl<string>;
  password: AbstractControl<string>;
}

export interface HomeDataInterface {
  status: HttpStatus,
  data: Record<string, unknown>;
}


export type UserUI = UserEntity;
export type LoginUI = Login;
export type ErrorUI = ErrorEntity;
