import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { announcementApi } from './announcementApi';

export const store = configureStore({
  reducer: {
    [announcementApi.reducerPath]: announcementApi.reducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), announcementApi.middleware],
});

setupListeners(store.dispatch);
