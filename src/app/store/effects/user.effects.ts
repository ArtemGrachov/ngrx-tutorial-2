import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { IAppState } from '../state/app.state';
import { GetUser, GetUserSuccess, GetUsers, GetUsersSuccess, EUserActions } from '../actions/user.actions';
import { UsersService } from '../../services/users.service';
import { selectUserList } from '../selectors/user.selectors';
import { IUser } from 'src/app/models/user.interface';

@Injectable()
export class UserEffects {
  constructor(
    private usersService: UsersService,
    private actions$: Actions,
    private store: Store<IAppState>
  ) { }

  @Effect() public getUser$ = this.actions$.pipe(
    ofType<GetUser>(EUserActions.GET_USER),
    map((action) => action.payload),
    switchMap((userId: number) => this.usersService.getUser(userId)),
    map((user: IUser) => {
      return new GetUserSuccess(user);
    })
  )

  @Effect() public getUsers$ = this.actions$.pipe(
    ofType<GetUsers>(EUserActions.GET_USERS),
    switchMap(() => this.usersService.getUsers()),
    map((users: IUser[]) => new GetUsersSuccess(users))
  )
}