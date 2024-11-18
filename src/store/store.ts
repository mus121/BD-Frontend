import { configureStore } from '@reduxjs/toolkit';
import popupReducer from './slices/popupSlice';
import sessionReducer from './sessionSlice';

export const store = configureStore({
  reducer: {
    popup: popupReducer,
    session: sessionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
