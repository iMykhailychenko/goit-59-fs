import { composeWithDevTools } from '@redux-devtools/extension';
import axios from 'axios';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import { counterInitState } from './counter/counter.init-state';
import { counterReducer } from './counter/counter.reducer';
import { COUNTER } from './counter/counter.types';
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

// const enhancer = devToolsEnhancer();

const myMiddleware = store => next => action => {
  console.log('action', action);

  if (action.type === COUNTER) {
    next({ ...action, payload: 10 });
    return;
  }

  if (action.type === 'TEST') {
    store.dispatch({ type: 'HELLO' });
    return;
  }

  next(action);
};

export const getPostsThunk = () => async dispatch => {
  dispatch({ type: 'POSTS_LOADING' });
  try {
    const { data } = await axios.get('https://goit-fs.netlify.app/api/posts');
    dispatch({ type: 'POSTS_SUCCESS', payload: data });
  } catch (e) {
    dispatch({ type: 'POSTS_ERROR' });
  }
};

const myThunk = store => next => action => {
  if (typeof action === 'function') {
    action(store.dispatch);
    return;
  }

  next(action);
};

export const store = createStore(
  rootReducer,
  initState,
  composeWithDevTools(applyMiddleware(myThunk, myMiddleware)),
);
