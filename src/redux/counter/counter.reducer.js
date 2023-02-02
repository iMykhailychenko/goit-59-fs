import { createReducer } from '@reduxjs/toolkit';

import { counterAction } from './counter.action';
import { counterInitState } from './counter.init-state';

// export const counterReducer = (state = counterInitState, action) => {
//   switch (action.type) {
//     case COUNTER:
//       return state + action.payload;

//     default:
//       return state;
//   }
// };

// export const counterReducer = createReducer(counterInitState, {
//   [COUNTER]: (state, { payload }) => {
//     return state + payload;
//   },
// });

export const counterReducer = createReducer(counterInitState, builder => {
  builder.addCase(counterAction, (state, { payload }) => {
    return state + payload;
  });
});
