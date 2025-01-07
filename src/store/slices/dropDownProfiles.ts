import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GlobalProfiles } from '@/types/TGlobalProfiles';

type DropDownProfiles = {
  profiles: null | GlobalProfiles;
  followedFilterEnabled: boolean;
};

const initialState: DropDownProfiles = {
  profiles: null,
  followedFilterEnabled: false,
};
// create the slice
export const dropDownProfiles = createSlice({
  name: 'dropDownProfiles',
  initialState,
  reducers: {
    setDropDownProfiles(state, action: PayloadAction<GlobalProfiles>) {
      state.profiles = action.payload;
    },
    clearDropDownProfiles(state) {
      state.profiles = null;
    },
    setFollowedFilterEnable(state, action: PayloadAction<boolean>) {
      state.followedFilterEnabled = action.payload;
    },
  },
});

export const { setDropDownProfiles, clearDropDownProfiles, setFollowedFilterEnable } =
  dropDownProfiles.actions;

export default dropDownProfiles.reducer;
