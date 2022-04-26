import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addItems = createAction('items/add', (name, number) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
}));
export const deleteItems = createAction('items/delete');
export const changeFilter = createAction('items/changeFilter');
