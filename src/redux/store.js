/* eslint-disable import/no-extraneous-dependencies */
import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore, combineReducers } from 'redux';

import { counterInitState } from './counter/counter.init-state';
import { counterReducer } from './counter/counter.reducer';
import { userInitState } from './users/users.init-state';
import { usersReducer } from './users/users.reducer';

const initState = {
  counter: counterInitState,
  users: userInitState,
};

const rootReducer = combineReducers({
  counter: counterReducer,
  users: usersReducer,
});

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, initState, enhancer);
