import { configureStore } from '@reduxjs/toolkit';
import postIdReducer from './slices/postIdSlice';

export const store = configureStore({
  reducer: {
    postId: postIdReducer,
  },
});
