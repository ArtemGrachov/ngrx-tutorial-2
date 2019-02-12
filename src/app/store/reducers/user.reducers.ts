import { EUserActions } from '../actions/user.actions';
import { UserActions } from '../actions/user.actions';
import { initialUserState, IUserState } from '../state/user.state';
import { IUser } from 'src/app/models/user.interface';

export const userReducers = (
  state: IUserState = initialUserState,
  action: UserActions
): IUserState => {
  switch (action.type) {
    case EUserActions.GET_USERS_SUCCESS: {
      return {
        ...state,
        users: action.payload
      }
    }
    case EUserActions.GET_USER_SUCCESS: {
      return {
        ...state,
        selectedUser: action.payload
      }
    }
    default: {
      return state;
    }
  }
}