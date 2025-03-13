import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GlobalProfiles, DropDownProfilesState } from '@/interfaces/search';

const initialState: DropDownProfilesState = {
  profiles: null,
  isFollowedFilterEnabled: false,
};

const liConnectionProfiles = createSlice({
  name: 'dropDownProfiles',
  initialState,
  reducers: {
    setProfiles(state, action: PayloadAction<GlobalProfiles>) {
      state.profiles = action.payload;
    },
    clearProfiles(state) {
      state.profiles = null;
    },
    toggleFollowedFilter(state, action: PayloadAction<boolean>) {
      state.isFollowedFilterEnabled = action.payload;
    },
  },
});

export const { setProfiles, clearProfiles, toggleFollowedFilter } = liConnectionProfiles.actions;

export default liConnectionProfiles.reducer;
