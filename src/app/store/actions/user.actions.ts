import { Action } from '@ngrx/store';

import { IUser } from '../../models/user.interface';

export enum EUserActions {
  GET_USERS = '[User] Get Users',
  GET_USERS_SUCCESS = '[User] Get Users Success',
  GET_USER = '[User] Get User',
  GET_USER_SUCCESS = '[User] Get User Success'
}

export class GetUsers implements Action {
  public readonly type = EUserActions.GET_USERS;
}

export class GetUsersSuccess implements Action {
  public readonly type = EUserActions.GET_USERS_SUCCESS;

  constructor(public payload: IUser[]) { }
}

export class GetUser implements Action {
  public readonly type = EUserActions.GET_USER;
  constructor(public payload: number) { }
}

export class GetUserSuccess implements Action {
  public readonly type = EUserActions.GET_USER_SUCCESS;
  constructor(public payload: IUser) { }
}

export type UserActions = GetUsers | GetUsersSuccess | GetUser | GetUserSuccess;