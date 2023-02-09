import { createSelector } from '@reduxjs/toolkit';

export const selectIsModalOpen = state => state.users.isModalOpen;
export const selectUsers = state => state.users.data;
export const selectUsersSearch = state => state.users.search;

// export const selectFilteredUsers = state => {
//   const users = selectUsers(state);
//   const search = selectUsersSearch(state);

//   console.log('in selectFilteredUsers');

//   return users.filter(user =>
//     user.name.toLowerCase().includes(search.toLowerCase()),
//   );
// };

export const selectFilteredUsers = createSelector(
  [selectUsersSearch, selectUsers],

  (search, users) =>
    users.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase()),
    ),
);

// [] === []

// export const selectTotalOpenToWork = state => {
//   const users = selectUsers(state);
//   console.log('in selectTotalOpenToWork');

//   return users.filter(user => user.isOpenToWork).length;
// };

export const selectTotalOpenToWork = createSelector(
  [selectUsers],
  users => users.filter(user => user.isOpenToWork).length,
);
