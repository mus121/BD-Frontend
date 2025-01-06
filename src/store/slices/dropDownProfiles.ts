import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type DropDownProfiles = {
  profiles: any;
};

const initialState: DropDownProfiles = {
  profiles: null,
};
// create the slice
export const dropDownProfiles = createSlice({
  name: 'dropDownProfiles',
  initialState,
  reducers: {
    setDropDownProfiles(state, action: PayloadAction<boolean>) {
      state.profiles = action.payload;
    },
    clearDropDownProfiles(state) {
      state.profiles = null;
    },
  },
});

export const { setDropDownProfiles, clearDropDownProfiles } = dropDownProfiles.actions;

export default dropDownProfiles.reducer;
