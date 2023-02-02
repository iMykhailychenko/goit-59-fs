import { createAction } from '@reduxjs/toolkit';

// export const usersSearchAction = payload => ({ type: SEARCH, payload });
// export const deleteUserAction = payload => ({ type: DELETE_USER, payload });

export const usersSearchAction = createAction('SEARCH');
export const deleteUserAction = createAction('DELETE_USER');
