import { AbstractControl } from '@angular/forms';
// import { HttpStatus } from '@nestjs/common';
import { ErrorEntity, Login, } from './api-interfaces';
import { User } from './prisma';

export interface LoginForm {
  email: AbstractControl<string>;
  password: AbstractControl<string>;
}

export interface Error {
  error: string;
  message: string[] | string;
  statusCode: number;
}

// export interface HomeDataInterface {
//     status: HttpStatus,w
//     data: Record<string, unknown>
// }


export type UserUI = User;

