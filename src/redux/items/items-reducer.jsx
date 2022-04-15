import { createReducer, combineReducers } from '@reduxjs/toolkit';

import { addItems, deleteItems, changeFilter } from './items-actions';

////////Reducers///////////////////
const itemsReducer = createReducer([], {
  [addItems]: (state, { payload }) =>
    state.find(({ name }) => name.toLowerCase() === payload.name.toLowerCase())
      ? alert(`${payload.name} is already in contacts.`)
      : [...state, payload],

  [deleteItems]: (state, { payload }) =>
    state.filter(({ id }) => {
      /* console.log(payload); */
      return id !== payload;
    }),
});

const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
