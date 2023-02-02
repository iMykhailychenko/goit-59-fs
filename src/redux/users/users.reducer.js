import { createReducer } from '@reduxjs/toolkit';

import { deleteUserAction, usersSearchAction } from './users.actions';
import { userInitState } from './users.init-state';

// const searchReducer = (state = userInitState.search, { type, payload }) => {
//   switch (type) {
//     case SEARCH:
//       return payload;

//     default:
//       return state;
//   }
// };

// const searchReducer = createReducer(userInitState.search, builder => {
//   builder.addCase(usersSearchAction, (_, { payload }) => payload);
// });

// const usersListsReducer = (state = userInitState.data, { type, payload }) => {
//   switch (type) {
//     case DELETE_USER:
//       return state.filter(user => user.id !== payload);

//     default:
//       return state;
//   }
// };

// const usersListsReducer = createReducer(userInitState.data, builder => {
//   builder.addCase(deleteUserAction, (state, { payload }) =>
//     state.filter(user => user.id !== payload),
//   );
// });

// export const usersReducer = combineReducers({
//   search: searchReducer,
//   data: usersListsReducer,
// });

export const usersReducer = createReducer(userInitState, builder => {
  builder
    .addCase(usersSearchAction, (state, { payload }) => {
      // return { ...state, search: payload };
      state.search = payload;
    })
    .addCase(deleteUserAction, (state, { payload }) => {
      state.data = state.data.filter(user => user.id !== payload);
    });
});
