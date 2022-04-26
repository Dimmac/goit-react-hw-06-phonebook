import { createSlice } from '@reduxjs/toolkit';

export const itemsSlice = createSlice({
  name: 'items',
  initialState: 20,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { add, remove } = itemsSlice.actions;
