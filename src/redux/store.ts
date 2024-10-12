import { configureStore } from '@reduxjs/toolkit';
import { modalSlice } from './slices/modalSlice';
import { chatModalSlice } from './slices/chatModalSlice';
import { groupModalSlice } from './slices/groupModalSlice';

export const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    chatModal: chatModalSlice.reducer,
    groupModal: groupModalSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
