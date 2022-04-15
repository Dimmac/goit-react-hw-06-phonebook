import { createSlice } from '@reduxjs/toolkit';

const storeSlice = createSlice({
  name: 'example',
  initialState: {
    name: '',
    number: '',
  },
  reducers: {
    handleNameChange(state, action) {
      console.log(state);
      console.log(action);
    },
    removeTodo(state, action) {},
    toggleTodoComplete(state, action) {},
  },
});

export const { handleNameChange, removeTodo, toggleTodoComplete } =
  storeSlice.actions;
export default storeSlice.reducer;
