import { createReducer } from '@reduxjs/toolkit';

import { counterAction } from './counter.action';
import { counterInitState } from './counter.init-state';

export const counterReducer = createReducer(counterInitState, builder => {
  builder.addCase(counterAction, (state, { payload }) => {
    return state + payload;
  });
});
