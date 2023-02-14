import { createSelector } from '@reduxjs/toolkit';

export const selectIsModalOpen = state => state.users.isModalOpen;
export const selectUsers = state => state.users.data;
export const selectUsersSearch = state => state.users.search;

export const selectFilteredUsers = createSelector(
  [selectUsersSearch, selectUsers],

  (search, users) =>
    users.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase()),
    ),
);

export const selectTotalOpenToWork = createSelector(
  [selectUsers],
  users => users.filter(user => user.isOpenToWork).length,
);
