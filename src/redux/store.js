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

import { rootReducer } from './root.init-state';
import { initState } from './root.reducer';
import { postsApi } from './rtk-posts/rtk-posts.api';

export const store = configureStore({
  preloadedState: initState,
  devTools: true,
  reducer: rootReducer,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([postsApi.middleware]),
});

export const persistor = persistStore(store);
