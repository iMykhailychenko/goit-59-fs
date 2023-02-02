import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { counterInitState } from './counter/counter.init-state';
import { counterReducer } from './counter/counter.reducer';
import { userInitState } from './users/users.init-state';
import { usersReducer } from './users/users.slice';

const initState = {
  counter: counterInitState,
  users: userInitState,
};

// const rootReducer = combineReducers({
//   counter: counterReducer,
//   users: usersReducer,
// });

// export const store = createStore(rootReducer, initState);
export const store = configureStore({
  preloadedState: initState,
  devTools: true,
  reducer: {
    counter: counterReducer,
    users: usersReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
