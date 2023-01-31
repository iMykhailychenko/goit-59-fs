import { counterInitState } from './counter.init-state';
import { COUNTER } from './counter.types';

export const counterReducer = (state = counterInitState, action) => {
  switch (action.type) {
    case COUNTER:
      return state + action.payload;

    default:
      return state;
  }
};
