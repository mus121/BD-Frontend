import { configureStore } from '@reduxjs/toolkit';
import popupReducer from './slices/popupSlice';
import sessionReducer from './sessionSlice';
import appReducer from './slices/appslice';
import miniProfileReducer from './slices/miniProfilesSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    profile: miniProfileReducer,
    popup: popupReducer,
    session: sessionReducer,
  },
});
export const selectMiniProfile = (state: RootState) => state.profile.response.miniProfile;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
