import { createAction } from '@reduxjs/toolkit';

// export const counterAction = payload => ({ type: COUNTER, payload });

export const counterAction = createAction('COUNTER');
// console.log(counterAction.toString());
