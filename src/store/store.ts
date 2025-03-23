import { configureStore } from '@reduxjs/toolkit';
import popupReducer from '../slices/popUp';
import appReducer from '../slices/extension';
import miniProfileReducer from '../slices/miniProfile';
import aiFindSuggestProfilesReducer from '../slices/aiProfile';
import liConnectionProfilesReducer from '../slices/connection';
import stepComponentReducer from '../slices/steps';

export const store = configureStore({
  reducer: {
    app: appReducer,
    profile: miniProfileReducer,
    popup: popupReducer,
    aiFindSuggestProfiles: aiFindSuggestProfilesReducer,
    dropDownProfiles: liConnectionProfilesReducer,
    stepComponent: stepComponentReducer,
  },
});
export const selectMiniProfile = (state: RootState) => state.profile.response.miniProfile;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
