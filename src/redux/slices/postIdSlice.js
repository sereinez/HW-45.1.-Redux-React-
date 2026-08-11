import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 1, // поточний postId
};

const postIdSlice = createSlice({
  name: 'postId',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value = Math.max(1, state.value - 1);
    },
    setPostId: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, setPostId } = postIdSlice.actions;

export const selectPostId = (state) => state.postId.value;

export default postIdSlice.reducer;
