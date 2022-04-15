import { createSlice } from '@reduxjs/toolkit';

export const itemsSlice = createSlice({
  name: 'items',
  initialState: 20,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter(item => item.id !== action.payload); //Немутуєм стейт через filter, тому return треба
    },
  },
});

//console.log(itemsSlice);

export const { add, remove } = itemsSlice.actions;
