import { ConfigActions, EConfigActions } from '../actions/config.actions';
import { initialConfigState, IConfigState } from '../state/config.state';

export const configReducers = (
  state: IConfigState = initialConfigState,
  action: ConfigActions
): IConfigState => {
  switch (action.type) {
    case EConfigActions.GET_CONFIG_SUCCESS: {
      return {
        ...state,
        config: action.payload
      };
    }
    default: {
      return state;
    }
  }
}