import { SEARCH, DELETE_USER } from './users.types';

export const usersSearchAction = payload => ({ type: SEARCH, payload });
export const deleteUserAction = payload => ({ type: DELETE_USER, payload });
